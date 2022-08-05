import React, { Component } from 'react';
class App extends React.Component {
constructor(props) {
  
super(props);
this.state = {
  Nom: '',
  Anne: '',
  age: '',
  remarque:''

};
this.onChange = this.onChange.bind(this);
this.handleSubmit = this.handleSubmit.bind(this);
this.reset=this.reset.bind(this);
}
onChange = e => { // arrow function
  this.setState({ [e.target.name]: e.target.value });
  };

handleSubmit(event) {
  
let Anne=this.state.Anne;
let Nom=this.state.Nom;

if(Anne!=='' && Nom!=='')
{
  let age=2022-Anne;
  const ageval= <span className='alert alert-primary'>votre age est {age}</span>;

this.setState({age:ageval})

if(age<18)
{
  const rmq= <span className='alert alert-warning'>vous êtes mineur</span>;

this.setState({remarque:rmq})
}
else if(age<=70)
{
  const rmq= <span className='alert alert-success'>vous êtes majeur</span>;

  this.setState({remarque:rmq})
}
else
{
  const rmq= <span className='alert alert-danger'>vous êtes en sénoir</span>;

  this.setState({remarque:rmq})
}
}
else
{
  const rmq= <span className='alert alert-danger'>remplissez votre Annes et Nom</span>;

  this.setState({remarque:rmq})
}

event.preventDefault();

}
reset()
{
  this.setState({
    Nom: '',
    Anne: '',
    age: '',
    remarque:''

  })


}
render() {
  return (
    <div className="container">
  <div className="row">
    <div className="col">
      
    </div>
    <div className="col">
    <form onSubmit={this.handleSubmit} >
  <h1 className="text-center">Calcule d'age</h1>

<div className="mb-3">
  <label for="exampleFormControlInput1" className="form-label">Nom</label>
  <input type="text" name="Nom"  value={this.state.Nom} onChange={this.onChange} className="form-control"  placeholder="Votre Nom ici" />
  
</div>
<div className="mb-3">
  <label for="exampleFormControlInput1" className="form-label">Anne</label>
  <input type="text" name="Anne" pattern='[0-9.]{2,6}' value={this.state.Anne} onChange={this.onChange} className="form-control"  placeholder="Votre Annes ici" />
</div>

<div className="mb-3 text-center">
<input type="submit" className="btn btn-primary" value="Submit" />&nbsp;&nbsp;
<input type="reset" onClick={this.reset} className="btn btn-warning" value="vider" />
<br></br>
<br></br><br></br><br></br>
<div className='text-center'>{this.state.age}</div>
<br></br><br></br><br></br><div className='text-center'>{this.state.remarque}</div>

</div>
  
  </form>
    </div>
    <div className="col">
      
    </div>
  </div>
</div>
  
  );
  }
  }
  export default App;