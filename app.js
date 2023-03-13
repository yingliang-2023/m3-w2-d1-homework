const { MongoClient } = require('mongodb')

//create instance of mongoclient for mongodb
const client = new MongoClient('mongodb://127.0.0.1:27017/nodemongo')

var stats =[
    {
        'city': 'San Juan', 
        'zip': '00926', 
        'state': 'PR', 
        'income': '34781',
        'age': '44'
    },
    {
        'city': 'Corona', 
        'zip': '11368', 
        'state': 'NY', 
        'income': '50797',
        'age': '32'
    },
    {
        'city': 'Chicago', 
        'zip': '60629', 
        'state': 'IL', 
        'income': '42019',
        'age': '31'
    },
    {
        'city': 'El Paso', 
        'zip': '79936', 
        'state': 'TX', 
        'income': '54692',
        'age': '31'
    },
    {
        'city': 'Los Angeles', 
        'zip': '90011', 
        'state': 'CA', 
        'income': '36954',
        'age': '28'
    },
    {
        'city': 'Norwalk', 
        'zip': '90650', 
        'state': 'CA', 
        'income': '66453',
        'age': '35'
    }
]





//connect to database

client.connect()
.then(() => {
    // console.log('Connected to MongoDB');
    // //close connection
    // client.close();   
    // console.log("database created");

    dbo=client.db('statsdb');
    /*dbo.createCollection('uscensus').then(() => {
        console.log("collection created");
        client.close();
    });*/

    /*dbo.collection('uscensus').insertMany(stats).then((res) => {
        console.log(console.log('Number of documents inserted: ' + res.insertedCount));
        client.close();
    });*/

    var stats2=[
        { 'city': 'SPacoima', 
        'zip': '91331', 
        'state': 'CA', 
        'income': '60360',
        'age': '33'
    },

    {'city': 'Ketchikan', 
    'zip': '99950', 
    'state': 'AK', 
    'income': '00000',
    'age': '00'

    }
]

   /* dbo.collection('uscensus').insertMany(stats2).then((res) => {
        console.log(console.log('Number of documents inserted: ' + res.insertedCount));
    });*/
    // var query={city:"Corona"}
    // dbo.collection('uscensus').findOne(query).then((res) => {
    //     console.log(res.zip);
     // client.close();
    // });

    // var query={state:"CA"};
    // var CAcity=dbo.collection('uscensus').find(query).toArray().then((res) => {

    //     for(var i=0;i<res.length;i++){
    //     console.log(`The income of ${res[i].city} is ${res[i].income}`);
    //     }
    // client.close();
  
    // })
    // var query={city:"Alaska"};
    // var newValue={$set:{zip:38910, income:46}};
    // dbo.collection('uscensus').updateOne(query,newValue).then(() => {
    //     console.log("1 document updated");
    //     client.close();
    // })

    var mysort={state:1};
    dbo.collection('uscensus').find().sort(mysort).toArray().then((item) => {
        console.log('Successfully sorted by state');
        console.log(item);
        client.close();
    });

 
})
.catch(error=>console.log('Failed to connect to MongoDB', error))




