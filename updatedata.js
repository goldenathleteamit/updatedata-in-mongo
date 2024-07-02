const dbConnect=require ('./connectionfile');

const update = async()=>{
    let data = await dbConnect();
    let result = await data.updateOne({
        name:'amit'},{$set:{name:'amityadav'}}
    );
    console.log(result);
}
update();