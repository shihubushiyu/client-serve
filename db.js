const mysql = require('mysql')
const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '527862',
    database: 'node_sche'
})

db.query('select * from new_table', (err, result) => {
    //得到的result是个数组
    console.log(result)
})

// 1.values 后面的括号是两个占位符
// db.query('insert into new_table (username,passowrd) values (?,?)',["gxy",999],(err,result)=>{
//     //得到的result是个对象
//     console.log(result)
//     if (result.affectedRows==1){
//         console.log('插入成功')
//     }
// })

const data = {username:"郭大宝",password:'040607'}
// 2.set 写法的插入语句(记得set后要加问号)    -----便捷方式
db.query('insert into new_table set ?',data,(err,result)=>{
    if(result.affectedRows==1){
        console.log('插入成功')
    }
})

// 3.更新语句；第一种写法
// db.query('update new_table set username=?,password=? where id=?',[data.username,data.password,2],(err,result)=>{
//     if(result.affectedRows==1){
//         console.log('更新成功')
//     }
// })

// // 4.更新语句；第二种写法，便捷式
// db.query('update new_table set ? where id=?',[data,4],(err,result)=>{
//     if(result.affectedRows==1){
//         console.log('更新成功')
//     }
// })