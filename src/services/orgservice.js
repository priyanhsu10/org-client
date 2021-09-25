import axios from "axios";
class CommonService{
baseUrl="http://localhost:9000/api/"
 async get(url){
  let data= await  axios.get(`${this.baseUrl}${url}`);
  console.log(data);
  return data.data;
}
 async create(url,item){
  let data= await  axios.post(`${this.baseUrl}${url}`,{...item})
  console.log(data);
  
  return data.data;
}
 async update(url,item){
  let data= await  axios.post(`${this.baseUrl}${url}`,{...item})
  console.log(data);
  
  return data.data;
}
 async delete(url){
    await  axios.get(`${this.baseUrl}${url}`)
 
}
 
}

export class OrgService {
 common= new CommonService();
 url='organizations'
 
getAll(){
  return this.common.get(this.url);
}
getById(id){
  return this.common.get(`/${this.url}`);
}
 create(item){
 return this.common.create(this.url,item)
}
 update(id,item){
  return this.common.update(`${this.url}/${id}`,item)
  
}
 delete(id){
     return this.common.delete(`${this.url}/${id}`)
}
}