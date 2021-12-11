import chai from 'chai'
import requests from 'chai-http'
import app from '../index'

chai.use(requests)

describe('teste do controller de alunos', () => {
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

  it('listagem de alunos cadastrados', (done) => {
    chai.request('http://localhost:3000/api/v1').get('/alunos')
      .set('token', global.token).end((err, res) => {
        chai.expect(res).to.have.status(200)
        chai.expect(res.body.alunos).to.be.an('array')
        done(err)
      })
  })

  it('cadastro correto de aluno', (done) => {
    chai.request('http://localhost:3000/api/v1').post('/alunos')
      .set('content-type', 'application/json')
      .set('token', global.token)
      .send({
        "nome": "José Israel Monteiro",
        "cpf": "319.749.574-89",
        "matricula": "20202131182",
        "senha": "password",
        "data_nascimento": "1998-03-15",
        "telefone": "(83) 98257-5673",
        "endereco": "Rua Rita Xavier de Oliveira, 117",
        "curso_id": 1
      }).end((err, res) => {
        chai.expect(res).to.have.status(201)
        chai.expect(res.body.aluno).to.be.an('object')
        done(err)
      })
  })

  it('cadastro com número de CPF existente', (done) => {
    chai.request('http://localhost:3000/api/v1').post('/alunos')
      .set('content-type', 'application/json')
      .set('token', global.token)
      .send({
        "nome": "José Israel Monteiro",
        "cpf": "196.404.900-83",
        "matricula": "20202131183",
        "senha": "password",
        "data_nascimento": "1998-03-15",
        "telefone": "(83) 98764-3871",
        "endereco": "Rua Rita Xavier de Oliveira, 117",
        "curso_id": 1
      }).end((err, res) => {
        chai.expect(res).to.have.status(500)
        chai.expect(res.body.message).to.be.a('string')
        done(err)
      })
  })

  it('cadastro com número de matrícula existente', (done) => {
    chai.request('http://localhost:3000/api/v1').post('/alunos')
      .set('content-type', 'application/json')
      .set('token', global.token)
      .send({
        "nome": "José Israel Monteiro",
        "cpf": "555.539.304-05",
        "matricula": "20181132020",
        "senha": "password",
        "data_nascimento": "1998-03-15",
        "telefone": "(83) 98764-3871",
        "endereco": "Rua Rita Xavier de Oliveira, 117",
        "curso_id": 1
      }).end((err, res) => {
        chai.expect(res).to.have.status(500)
        chai.expect(res.body.message).to.be.a('string')
        done(err)
      })
  })

  it('atualização com id existente', (done) => {
    chai.request('http://localhost:3000/api/v1').put('/alunos/6')
      .set('content-type', 'application/json')
      .set('token', global.token)
      .send({
        "nome": "Carlos Israel Monteiro",
        "cpf": "319.749.574-89",
        "matricula": "20202131182",
        "senha": "password",
        "data_nascimento": "1996-05-02",
        "telefone": "(83) 98605-6521",
        "endereco": "Avenida Epitácio Pessoa, 215",
        "curso_id": 2
      }).end((err, res) => {
        chai.expect(res).to.have.status(200)
        chai.expect(res.body.aluno).to.be.an('object')
        done(err)
      })
  })

  it('atualização com id inexistente', (done) => {
    chai.request('http://localhost:3000/api/v1').put('/alunos/30')
      .set('content-type', 'application/json')
      .set('token', global.token)
      .send({
        "nome": "Carlos Israel Monteiro",
        "cpf": "100.595.024-52",
        "matricula": "20202658188",
        "senha": "password",
        "data_nascimento": "1996-05-02",
        "telefone": "(83) 98605-6521",
        "endereco": "Avenida Epitácio Pessoa, 215",
        "curso_id": 2
      }).end((err, res) => {
        chai.expect(res).to.have.status(404)
        chai.expect(res.body.message).to.be.a('string')
        done(err)
      })
  })

  it('atualização com número de CPF existente', (done) => {
    chai.request('http://localhost:3000/api/v1').put('/alunos/6')
      .set('content-type', 'application/json')
      .set('token', global.token)
      .send({
        "nome": "Carlos Israel Monteiro",
        "cpf": "808.335.804-50",
        "matricula": "20202131182",
        "senha": "password",
        "data_nascimento": "1996-05-02",
        "telefone": "(83) 98605-6521",
        "endereco": "Avenida Epitácio Pessoa, 215",
        "curso_id": 2
      }).end((err, res) => {
        chai.expect(res).to.have.status(500)
        chai.expect(res.body.message).to.be.a('string')
        done(err)
      })
  })

  it('atualização com número de matrícula existente', (done) => {
    chai.request('http://localhost:3000/api/v1').put('/alunos/6')
      .set('content-type', 'application/json')
      .set('token', global.token)
      .send({
        "nome": "Carlos Israel Monteiro",
        "cpf": "251.367.924-50",
        "matricula": "20181132020",
        "senha": "password",
        "data_nascimento": "1996-05-02",
        "telefone": "(83) 98605-6521",
        "endereco": "Avenida Epitácio Pessoa, 215",
        "curso_id": 2
      }).end((err, res) => {
        chai.expect(res).to.have.status(500)
        chai.expect(res.body.message).to.be.a('string')
        done(err)
      })
  })

  it('exclusão com id existente', (done) => {
    chai.request('http://localhost:3000/api/v1').delete('/alunos/6')
      .set('token', global.token).end((err, res) => {
        chai.expect(res).to.have.status(204)
        done(err)
      })
  })

  it('exclusão com id inexistente', (done) => {
    chai.request('http://localhost:3000/api/v1').delete('/alunos/30')
      .set('token', global.token).end((err, res) => {
        chai.expect(res).to.have.status(404)
        chai.expect(res.body.message).to.be.a('string')
        done(err)
      })
  })

  it('exclusão de aluno com empréstimos cadastrados', (done) => {
    chai.request('http://localhost:3000/api/v1').delete('/alunos/1')
      .set('token', global.token).end((err, res) => {
        chai.expect(res).to.have.status(204)
        done(err)
      })
  })

  it('consulta de aluno com id existente', (done) => {
    chai.request('http://localhost:3000/api/v1').get('/alunos/2')
      .set('token', global.token).end((err, res) => {
        chai.expect(res).to.have.status(200)
        chai.expect(res.body.aluno).to.be.an('object')
        done(err)
      })
  })

  it('consulta de aluno com id inexistente', (done) => {
    chai.request('http://localhost:3000/api/v1').get('/alunos/30')
      .set('token', global.token).end((err, res) => {
        chai.expect(res).to.have.status(404)
        chai.expect(res.body.message).to.be.a('string')
        done(err)
      })
  })
})
