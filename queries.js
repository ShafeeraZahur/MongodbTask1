//1.Find all the information about each products
db.userdetails.find({});

//2.Find the product price which are between 400 and 800.
db.userdetails.find({product_price:{$lte:800,$gte:400}});

//3.Find the product price which are not between 400 and 600.
db.userdetails.find({product_price:{$not:{$lte:600,$gte:400}}});

//4.List the four product which are grater than 500 in price 
db.userdetails.find({product_price:{$gte:500}}).limit(4);

//5.Find the product name and product material of each products
db.userdetails.find({},{product_name:1,product_material:1});

//6.Find the product with a row id of 10
db.userdetails.find({id:"10"});

//7.Find only the product name and product material
db.userdetails.find({},{product_name:1,product_material:1});

//8.Find all products which contain the value of soft in product material
db.userdetails.find({product_material:{$regex:"Soft"}});

//9.Find products which contain product color indigo  and product price 492.00
db.userdetails.find({$or:[{product_color:"indigo"},{product_price:492}]});

//10.Delete the products which product price value is 47.00
db.userdetails.deleteMany({product_price:{$eq:47.00}});