import axios from 'axios'; 
jest.mock('axios'); 

const cats = [{"ownerGender":"Male","names":["Fido","Garfield","Jim","Max","Sam","Tom"]},{"ownerGender":"Female","names":["Garfield","Nemo","Simba","Tabby"]}];


const data = [
  {
    "name": "Bob",
    "gender": "Male",
    "age": 23,
    "pets": [{"name": "Garfield", "type": "Cat"}, {"name": "Fido", "type": "Dog"}]
  },
  {"name": "Jennifer", "gender": "Female", "age": 18, "pets": [{"name": "Garfield", "type": "Cat"}]},
  {"name": "Steve", "gender": "Male", "age": 45, "pets": null},
  {
    "name": "Fred",
    "gender": "Male",
    "age": 40,
    "pets": [
      {"name": "Tom", "type": "Cat"},
      {"name": "Max", "type": "Cat"},
      {"name": "Sam", "type": "Dog"},
      {"name": "Jim", "type": "Cat"}
    ]
  },
  {"name": "Samantha", "gender": "Female", "age": 40, "pets": [{"name": "Tabby", "type": "Cat"}]},
  {
    "name": "Alice",
    "gender": "Female",
    "age": 64,
    "pets": [{"name": "Simba", "type": "Cat"}, {"name": "Nemo", "type": "Fish"}]
  }
];
 
describe('fetchData', () => {

  
  it('fetches successfully data from an API - 1', async () => {
   
    axios.get.mockImplementationOnce(() => Promise.resolve(data));
  });
 
  it('fetches erroneously data from an API - 2', async () => {
    const errorMessage = 'Network Error';
 
    axios.get.mockImplementationOnce(() =>
      Promise.reject(new Error(errorMessage)),
    );
  });
});