import sass
import pathlib
import shutil
from css_html_js_minify import html_minify, js_minify, css_minify

src_path = pathlib.Path(__file__).parent / 'src'
build_path = pathlib.Path(__file__).parent / 'build'
dist_path = pathlib.Path(__file__).parent / 'dist'

# CSS Compilation
sass.compile(dirname=(src_path, build_path), output_style='compressed')

# JS / TS Compilation

shutil.copyfile(src_path / 'script.js', build_path / 'script.js')

# HTML Copy

shutil.copyfile(src_path / 'index.html', build_path / 'index.html')

# Minify and move to dist
# CSS
(dist_path / 'style.css').write_text(css_minify((build_path / 'style.css').read_text()))

# JS
(dist_path / 'script.js').write_text(js_minify((build_path / 'script.js').read_text()))

# HTML
(dist_path / 'index.html').write_text(html_minify((build_path / 'index.html').read_text()))


