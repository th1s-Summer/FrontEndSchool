## 생성 Create
- (중요) insertOne : 하나의 문서만 삽입할 수 있습니다. (블로그 글 작성)
- insertMany : 여러 가지의 문서를 삽입할 수 있습니다.
- insert : 하나 또는 여러가지의 문서를 삽입할 수 있습니다.

## 읽기 Read 
- (중요) db.user_info.find() : 모든 데이터 찾기
- (중요) db.user_info.find({}) : 모든 데이터 찾기
- db.user_info.find().pretty()
- db.user_info.find().forEach(printjson)
- (중요) db.user_info.find( { ABO: "B" } ) : 조건만 있는 경우
- (중요) db.user_info.findOne( {"gender":"F"} ) : 조건만 있는 경우
- (중요) db.user_info.findOne({userid : 'licat'})
- (중요) db.user_info.find( {"gender":"F"}, {"name":1} ) : 조건과 보여질 데이터가 함께
- (중요) db.user_info.find( {"gender":"M"}, {"name":1} )
- (중요) db.user_info.find( {}, {"gender":1} )
- db.user_info.find( {}, {_id:0, "name":1, "gender":1} ) 
- db.user_info.find( {}, {"name":0,"age":0} )
- db.user_info.find( {}, {"gender":1,"size.h":1} )
- db.user_info.find( {}, {"gender":1,"size.w":1} )
- db.user_info.find( {}, {"gender":1,"size.hello":1} )
- db.user_info.find({},{"gender":1, "coupon":{"$slice":1}})
- db.user_info.find( {}, {"coupon" : {"$slice":1}} )
- db.user_info.find( {}, {"coupon":1} )
- db.user_info.find({"name.last_name":"mina"}).pretty()
- (중요) db.user_info.update({"name.last_name":"mina"}, {$set:{"size.h":160,"size.w":50}})

## 수정 Update
- db.snacks.update({item:"pepero"}, {$set:{"taste.1":"yogurt", "taste.2":"choco_cookie"}})
- (중요) db.user_info.save({_id : 106, "name.first_name" : "lee", "name.last_name" : "hojun", "age":25})
- db.user_info.save({_id:ObjectId(617657d8560fd4aaef69d1a1),"name":"jini", "age":25})

## 삭제 Delete
- db.user_info.remove({"ABO":"A",1})
- db.user_info.deleteOne({"status":"x"})

(회원 탈퇴시 데이터는 삭제하지 않고 이관(필드명 조정), 약관에 해당 사항을 명시)</br>
```
{ 
_id : 106, 
"name.first_name" : "lee", 
"name.last_name" : "hojun", 
"age" : 25 
"회원탈퇴일" : 2022-10-10 
}
```
- db.snacks.find({company:{$eq:"lotte"}})
- db.snacks.find({company:"lotte"})
- db.snacks.find({"Date.MPD":{$eq : ISODate("2019-12-25")}})
- db.snacks.find({"Date.MPD" : ISODate("2019-12-25")})
```
$lt : lt(Less Than) : 미만 
$lte : lte(Less Than Equals) : 이하 
$gt : gt(Greater Than) : 초과 
$gte : gte(Greater Than Equals) : 이상 
$in : in(Valuse in an array) : 값을 포함 
$ne : ne(Not Equals) 
```

- (중요) db.snacks.find().sort({price:1})
db.snacks.find().sort({price:-1})
