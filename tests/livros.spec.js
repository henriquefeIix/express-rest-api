import chai from 'chai'
import requests from 'chai-http'
import app from '../index'

chai.use(requests)

describe('teste do controller de livros', () => {
  before((done) => {
    chai.request('http://localhost:3000/api/v1').post('/authenticate')
      .set('content-type', 'application/json')
      .send({
        "matricula": "20181132020",
        "senha": "password"
      }).end((err, res) => {
        global.token = res.body.token
        chai.expect(res).to.have.status(200)
        done(err)
      })
  })

  it('listagem de livros cadastrados', (done) => {
    chai.request('http://localhost:3000/api/v1').get('/livros')
      .set('token', global.token).end((err, res) => {
        chai.expect(res).to.have.status(200)
        chai.expect(res.body.livros).to.be.an('array')
        done(err)
      })
  })

  it('cadastro correto de livro', (done) => {
    chai.request('http://localhost:3000/api/v1').post('/livros')
      .set('content-type', 'application/json')
      .set('token', global.token)
      .send({
        "titulo": "Manual de DevOps",
        "ano_publicacao": "2020",
        "local_publicacao": "São Paulo",
        "sinopse": "Donec pretium lobortis nunc at venenatis. Aenean ultrices, nibh sed.",
        "autores": [1, 2, 3]
      }).end((err, res) => {
        chai.expect(res).to.have.status(201)
        chai.expect(res.body.livro).to.be.an('object')
        done(err)
      })
  })

  it('cadastro com um autor inexistente', (done) => {
    chai.request('http://localhost:3000/api/v1').post('/livros')
      .set('content-type', 'application/json')
      .set('token', global.token)
      .send({
        "titulo": "Manual de DevOps",
        "ano_publicacao": "2020",
        "local_publicacao": "São Paulo",
        "sinopse": "Donec pretium lobortis nunc at venenatis. Aenean ultrices, nibh sed.",
        "autores": [30]
      }).end((err, res) => {
        chai.expect(res).to.have.status(500)
        chai.expect(res.body.message).to.be.a('string')
        done(err)
      })
  })

  it('cadastro com dois autores inexistentes', (done) => {
    chai.request('http://localhost:3000/api/v1').post('/livros')
      .set('content-type', 'application/json')
      .set('token', global.token)
      .send({
        "titulo": "Manual de DevOps",
        "ano_publicacao": "2020",
        "local_publicacao": "São Paulo",
        "sinopse": "Donec pretium lobortis nunc at venenatis. Aenean ultrices, nibh sed.",
        "autores": [30, 40]
      }).end((err, res) => {
        chai.expect(res).to.have.status(500)
        chai.expect(res.body.message).to.be.a('string')
        done(err)
      })
  })

  it('atualização com id existente', (done) => {
    chai.request('http://localhost:3000/api/v1').put('/livros/1')
      .set('content-type', 'application/json')
      .set('token', global.token)
      .send({
        "titulo": "The DevOps Handbook",
        "ano_publicacao": "2016",
        "local_publicacao": "Portland",
        "sinopse": "Donec pretium lobortis nunc at venenatis. Aenean ultrices, nibh sed.",
        "autores": [1, 2, 3]
      }).end((err, res) => {
        chai.expect(res).to.have.status(200)
        chai.expect(res.body.livro).to.be.an('object')
        done(err)
      })
  })

  it('atualização com id inexistente', (done) => {
    chai.request('http://localhost:3000/api/v1').put('/livros/100')
      .set('content-type', 'application/json')
      .set('token', global.token)
      .send({
        "titulo": "The DevOps Handbook",
        "ano_publicacao": "2016",
        "local_publicacao": "Portland",
        "sinopse": "Donec pretium lobortis nunc at venenatis. Aenean ultrices, nibh sed.",
        "autores": [1, 2, 3]
      }).end((err, res) => {
        chai.expect(res).to.have.status(404)
        chai.expect(res.body.message).to.be.a('string')
        done(err)
      })
  })

  it('atualização com autores inexistentes', (done) => {
    chai.request('http://localhost:3000/api/v1').put('/livros/1')
      .set('content-type', 'application/json')
      .set('token', global.token)
      .send({
        "titulo": "The DevOps Handbook",
        "ano_publicacao": "2016",
        "local_publicacao": "Portland",
        "sinopse": "Donec pretium lobortis nunc at venenatis. Aenean ultrices, nibh sed.",
        "autores": [30, 40, 50]
      }).end((err, res) => {
        chai.expect(res).to.have.status(500)
        chai.expect(res.body.message).to.be.a('string')
        done(err)
      })
  })

  it('exclusão com id existente', (done) => {
    chai.request('http://localhost:3000/api/v1').delete('/livros/8')
      .set('token', global.token).end((err, res) => {
        chai.expect(res).to.have.status(204)
        done(err)
      })
  })

  it('exclusão com id inexistente', (done) => {
    chai.request('http://localhost:3000/api/v1').delete('/livros/80')
      .set('token', global.token).end((err, res) => {
        chai.expect(res).to.have.status(404)
        chai.expect(res.body.message).to.be.a('string')
        done(err)
      })
  })

  it('exclusão de livro existente em empréstimos', (done) => {
    chai.request('http://localhost:3000/api/v1').delete('/livros/6')
      .set('token', global.token).end((err, res) => {
        chai.expect(res).to.have.status(204)
        done(err)
      })
  })

  it('consulta de livro com id existente', (done) => {
    chai.request('http://localhost:3000/api/v1').get('/livros/3')
      .set('token', global.token).end((err, res) => {
        chai.expect(res).to.have.status(200)
        chai.expect(res.body.livro).to.be.an('object')
        done(err)
      })
  })

  it('consulta de livro com id inexistente', (done) => {
    chai.request('http://localhost:3000/api/v1').delete('/livros/80')
      .set('token', global.token).end((err, res) => {
        chai.expect(res).to.have.status(404)
        chai.expect(res.body.message).to.be.a('string')
        done(err)
      })
  })
})