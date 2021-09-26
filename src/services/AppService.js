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
  let data= await  axios.put(`${this.baseUrl}${url}`,{...item})
  console.log(data);
  
  return data.data;
}
 async delete(url){
    await  axios.get(`${this.baseUrl}${url}`)
 
}
 
}

export class AppService {
 commonService= new CommonService();
  url;
 constructor(url){
    this.url=url
 }
getAll(){
  return this.commonService.get(this.url);
}
getById(id){
  return this.commonService.get(`/${this.url}`);
}
 create(item){
 return this.commonService.create(this.url,item)
}
 update(id,item){
  return this.commonService.update(`${this.url}/${id}`,item)
  
}
 delete(id){
     return this.commonService.delete(`${this.url}/${id}`)
}
}
