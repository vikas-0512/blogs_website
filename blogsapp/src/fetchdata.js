import {API_URL} from './url';

export const Get_blogs=async ({id,set_blogs})=>{
    var blogs=[];
    fetch(`${API_URL}/main/getblogs/${id}`,{
        method: 'GET',
        headers: {
            'Content-type': 'application/json'
        }
    })
    .then(async (res)=>{
        try{
        const jsonRes=await res.json();
        blogs=jsonRes;
        await set_blogs(blogs);
        return jsonRes;
        }
        catch (err){
            console.log("error occured",err);
            return {};
        }
    })
    .catch(err=>{
        console.log(err);
        return {};
    })
}

export const Add_blog=async({id,title,body})=>{
    console.log('hello')
    fetch(`${API_URL}/main/addblog`,{
        method: 'POST',
        body: JSON.stringify({
            id,
            title,
            body
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(async (res)=>{
        const jsonRes=await res.json();
        return jsonRes;
    })
    .catch(err=>{
        console.log('error in adding blog',err)
    })
}

export const Delete_blog=async ({id})=>{
    console.log(id,typeof id);
    fetch(`${API_URL}/main/delblog`,{
        method: 'DELETE',
        body: JSON.stringify({
            blogid: id
        }),
        headers: {
            'Content-Type':'application/json'
        }
    })
    .then(async (res)=>{
        const jsonRes=await res.json();
        return jsonRes;
    })
    .catch(err=>{
        console.log('error in deleting',err);
        return {};
    })
}

export const Add_user=async({username,password})=>{
    var temp={};
     fetch(`${API_URL}/users/adduser`,{
        method: 'POST',
        body: JSON.stringify({
            username,
            password
        }),
        headers: {
           'Content-type': 'application/json'
        }
     })
     .then(async (res)=>{
        const jsonRes=await res.json();
        console.log('hey.....',jsonRes);
        temp=(jsonRes);
        return temp;
     })
     .catch(err=>{
         console.log('error in adding user',err);
         return {};
     })
}

export const User_Login=async({username,password,set_details})=>{
    fetch(`${API_URL}/users/validate`,{
        method: 'POST',
        body: JSON.stringify({
            username,
            password
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(async (res)=>{
        const jsonRes= await res.json();
        set_details(jsonRes);
        return jsonRes;
    })
    .catch(err=>{
        console.log('error in validating user',err);
        return {};
    })
}