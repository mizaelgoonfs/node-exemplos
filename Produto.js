function Produto(_preco, _nome, _descricao){
    var preco = _preco;
    var nome = _nome;
    var descricao = _descricao;
    this.SetPreco = SetPreco;
    this.SetNome = SetNome;
    this.SetDescricao = SetDescricao;
    this.GetPreco = GetPreco;
    this.GetNome = GetNome;
    this.GetDescricao = GetDescricao;
        
    function GetPreco(){
        return preco;
    }
        
    function GetNome(){
        return nome;
    }

    function GetDescricao(){
        return descricao;
    }
        
    function SetPreco(_preco) {
        preco = _preco;
    }
        
    function SetNome(_nome) {
        nome = _nome;
    }

    function SetDescricao(_descricao) {
        descricao = _descricao;
    }
    
  }

  var lista_de_produtos = [];

  for(var i = 0; i < 10; i++){
      var produto = new Produto(i+10, `p${i}`, `descrição${i}`)
      lista_de_produtos.push(produto);
  }

  for (j in lista_de_produtos){
    console.log(lista_de_produtos[j].GetPreco());
    console.log(lista_de_produtos[j].GetNome());
  }