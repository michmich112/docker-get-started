db = db.getSiblingDB("test");
const data = db.users.find({}).toArray();
if(data.filter(o => o.name === 'toto').length < 1){
    db.users.insertOne({
        name: "toto",
        age: 69
    })
}
