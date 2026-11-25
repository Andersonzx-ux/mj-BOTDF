# Gera o mapa do título vermelho (progresso), o recorte do piso xadrez e as miniaturas.
# Uso (na raiz do projeto): python3 -I tools/gerar_recortes.py
import base64, io
import numpy as np
from PIL import Image

im = Image.open('assets/cover.jpg').convert('RGB')
W, H = im.size
im.resize((256, 256), Image.LANCZOS).save('assets/cover-256.jpg', quality=88)
im.resize((512, 512), Image.LANCZOS).save('assets/cover-512.jpg', quality=90)
a = np.asarray(im).astype(float)
R, G, B = a[..., 0], a[..., 1], a[..., 2]
yy, xx = np.mgrid[0:H, 0:W]

# letras vermelhas do título "Blood On The Dance Floor" (vermelho puro sobre o preto; nuvens douradas e texto branco ficam de fora)
box = (xx >= 108) & (xx <= 535) & (yy >= 22) & (yy <= 104)
cov = np.clip((R - 1.6 * np.maximum(G, B) - 30) / 120.0, 0, 1) * box
cov[cov < 0.06] = 0
s = np.clip((xx - 112) / (530 - 112), 0, 1)                    # ordem de leitura: da esquerda para a direita
order = np.where(cov > 0, 1 + np.round(s * 254), 0).astype(np.uint8)
out = np.zeros((H, W, 3), np.uint8); out[..., 0] = order; out[..., 1] = (cov * 255).astype(np.uint8)
buf = io.BytesIO(); Image.fromarray(out, 'RGB').save(buf, 'PNG', optimize=True)
with open('js/road.js', 'w') as f:
    f.write('/* Mapa das letras do título (gerado por tools/gerar_recortes.py): R = ordem de leitura (1..255), G = cobertura. */\n')
    f.write('window.ROAD = {w: %d, h: %d, png: "data:image/png;base64,%s"};\n' % (W, H, base64.b64encode(buf.getvalue()).decode()))

# piso xadrez da capa: faixa 210x22 espelhada (420x22) para repetir sem emenda; vira a divisória animada
t = im.crop((95, 530, 305, 552))
fx = Image.new('RGB', (420, 22)); fx.paste(t, (0, 0)); fx.paste(t.transpose(Image.FLIP_LEFT_RIGHT), (210, 0))
fx.save('assets/piso.jpg', quality=92)
print('ok', int((cov > 0).sum()), buf.tell())
