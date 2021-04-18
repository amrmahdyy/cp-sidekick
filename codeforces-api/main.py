import flask
import codeforces_wrapper
from flask_cors import CORS


app = flask.Flask(__name__)
CORS(app)
PROBLEM_LINK = 'https://codeforces.com/problemset/problem/'


@app.route('/', methods=['GET'])

def home():
    problem_id = flask.request.args['id']
    return flask.jsonify(codeforces_wrapper.parse_problem(PROBLEM_LINK + problem_id))


if __name__ == '__main__':
    app.run(port=8081)