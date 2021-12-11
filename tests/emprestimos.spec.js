import chai from 'chai'
import requests from 'chai-http'
import app from '../index'

chai.use(requests)

describe('teste do controller de empréstimos', () => {
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

  it('listagem de empréstimos realizados', (done) => {
    chai.request('http://localhost:3000/api/v1').get('/emprestimos')
      .set('token', global.token).end((err, res) => {
        chai.expect(res).to.have.status(200)
        chai.expect(res.body.emprestimos).to.be.an('array')
        done(err)
      })
  })

  it('cadastro correto de empréstimo', (done) => {
    chai.request('http://localhost:3000/api/v1').post('/emprestimos')
      .set('content-type', 'application/json')
      .set('token', global.token)
      .send({
        "previsao_devolucao": "2021-01-05",
        "aluno_id": 2,
        "livros": [1, 2, 3]
      }).end((err, res) => {
        chai.expect(res).to.have.status(201)
        chai.expect(res.body.emprestimo).to.be.an('object')
        done(err)
      })
  })

  it('cadastro com aluno inexistente', (done) => {
    chai.request('http://localhost:3000/api/v1').post('/emprestimos')
      .set('content-type', 'application/json')
      .set('token', global.token)
      .send({
        "aluno_id": 100,
        "previsao_devolucao": "2021-01-05",
        "livros": [1, 2, 3]
      }).end((err, res) => {
        chai.expect(res).to.have.status(500)
        chai.expect(res.body.message).to.be.a('string')
        done(err)
      })
  })

  it('cadastro com um livro inexistente', (done) => {
    chai.request('http://localhost:3000/api/v1').post('/emprestimos')
      .set('content-type', 'application/json')
      .set('token', global.token)
      .send({
        "aluno_id": 3,
        "previsao_devolucao": "2021-01-05",
        "livros": 20
      }).end((err, res) => {
        chai.expect(res).to.have.status(500)
        chai.expect(res.body.message).to.be.a('string')
        done(err)
      })
  })

  it('cadastro com dois livros inexistentes', (done) => {
    chai.request('http://localhost:3000/api/v1').post('/emprestimos')
      .set('content-type', 'application/json')
      .set('token', global.token)
      .send({
        "aluno_id": 3,
        "previsao_devolucao": "2021-01-05",
        "livros": [20, 21]
      }).end((err, res) => {
        chai.expect(res).to.have.status(500)
        chai.expect(res.body.message).to.be.a('string')
        done(err)
      })
  })

  it('cadastro com previsão de devolução nula', (done) => {
    chai.request('http://localhost:3000/api/v1').post('/emprestimos')
      .set('content-type', 'application/json')
      .set('token', global.token)
      .send({
        "aluno_id": 3,
        "previsao_devolucao": null,
        "livros": [1, 2, 3]
      }).end((err, res) => {
        chai.expect(res).to.have.status(500)
        chai.expect(res.body.message).to.be.a('string')
        done(err)
      })
  })

  it('devolução com livro existente nos registros', (done) => {
    chai.request('http://localhost:3000/api/v1').put('/emprestimos/3')
      .set('content-type', 'application/json')
      .set('token', global.token)
      .send({
        "livros": [5]
      }).end((err, res) => {
        chai.expect(res).to.have.status(200)
        chai.expect(res.body.emprestimo).to.be.an('object')
        done(err)
      })
  })

  it('devolução com livros existentes nos registros', (done) => {
    chai.request('http://localhost:3000/api/v1').put('/emprestimos/6')
      .set('content-type', 'application/json')
      .set('token', global.token)
      .send({
        "livros": [1, 2]
      }).end((err, res) => {
        chai.expect(res).to.have.status(200)
        chai.expect(res.body.emprestimo).to.be.an('object')
        done(err)
      })
  })

  it('devolução com id de empréstimo inexistente', (done) => {
    chai.request('http://localhost:3000/api/v1').put('/emprestimos/60')
      .set('content-type', 'application/json')
      .set('token', global.token)
      .send({
        "livros": [1, 2]
      }).end((err, res) => {
        chai.expect(res).to.have.status(404)
        chai.expect(res.body.message).to.be.a('string')
        done(err)
      })
  })

  it('devolução com id de livros inexistentes', (done) => {
    chai.request('http://localhost:3000/api/v1').put('/emprestimos/6')
      .set('content-type', 'application/json')
      .set('token', global.token)
      .send({
        "livros": [35, 36]
      }).end((err, res) => {
        chai.expect(res).to.have.status(500)
        chai.expect(res.body.message).to.be.a('string')
        done(err)
      })
  })

  it('exclusão de empréstimo com id existente', (done) => {
    chai.request('http://localhost:3000/api/v1').delete('/emprestimos/6')
      .set('token', global.token).end((err, res) => {
        chai.expect(res).to.have.status(204)
        done(err)
      })
  })

  it('exclusão de empréstimo com id inexistente', (done) => {
    chai.request('http://localhost:3000/api/v1').delete('/emprestimos/60')
      .set('token', global.token).end((err, res) => {
        chai.expect(res).to.have.status(404)
        chai.expect(res.body.message).to.be.a('string')
        done(err)
      })
  })

  it('consulta de emprestimo com id existente', (done) => {
    chai.request('http://localhost:3000/api/v1').get('/emprestimos/2')
      .set('token', global.token).end((err, res) => {
        chai.expect(res).to.have.status(200)
        chai.expect(res.body.emprestimo).to.be.an('object')
        done(err)
      })
  })

  it('consulta de emprestimo com id existente', (done) => {
    chai.request('http://localhost:3000/api/v1').get('/emprestimos/15')
      .set('token', global.token).end((err, res) => {
        chai.expect(res).to.have.status(404)
        chai.expect(res.body.message).to.be.a('string')
        done(err)
      })
  })
})