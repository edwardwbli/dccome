from flask import Flask,render_template

import pyqrcode
import re

app = Flask(__name__)


@app.route('/')
def index():
    return render_template('webpage.html')

@app.route('/convert/<str>')
def convert(str):

    img = pyqrcode.create(str,encoding='utf8')
    buffer = StringIO()
    img.svg(buffer,scale=4)
    p = re.compile(r'<svg.*</svg>')
    svgsegment = re.search(p, buffer.getvalue())
    testsvg = svgsegment.group(0)
    return testsvg



if __name__ == '__main__':
    app.run(debug=True)
