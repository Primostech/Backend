const Clinica = require('../model/Clinica')

//CRUD -Create - Read - Update - DELETE

module.exports = {
  async index(req,res){
    let Clinica = await Clinica.find()
    return res.json(Clinicas)
  },

  async store(req,res){
    const {endereco,bairro, ibge,criado_em,atualizado_em,status,nome }= req.body;
    const Clinica = await Clinica.create({endereco,bairro,ibge,criado_em,atualizado_em,status,nome })
    return res.json(Clinica)
  },

  async update(req,res){
    //recupera o Id que pela url query e guarda na variavel id
    var id = req.query.id;
    //recupera as inf do post em 
    
    let Clinica = await Clinica.findById(id);
    Clinica.endereco = req.body.endereco;
    Clinica.bairro = req.body.bairro;
    Clinica.ibge = req.body.ibge;
    Clinica.criado_em = req.body.criado_em;
    Clinica.atualizado_em = req.body.bairro;
    Clinica.status = req.body.status;
    Clinica.nome= req.body.nome;
    
    Clinica = await Clinica.update(Clinica);
    return res.json({messagem : 'Atualizar o Clinica ' + id +' com os dados do post '+ Clinica.nome})
  },
   
  async delete(req,res){
    var id = req.query.id;
    let Clinica = await Clinica.findById(id);
    Clinica = await Clinica.deleteOne(Clinica);

    return res.json(Clinica);
    
  }
}