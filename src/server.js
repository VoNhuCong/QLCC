import express from 'express';
import configViewEngine from './configs/viewEngine';
import initWebRoute from './route/web';
import initAPIRoute from './route/api';
// import connection from './configs/connectDB';

require('dotenv').config();
var morgan = require('morgan')


// tạo một ứng dụng express
const app = express();
// chúng ta có thể sử dụng lệnh như này
// const port = 3000;
// tuy nhiên khi đi làm người ta thường tách nó ra thành file .env
// để sử dụng file đó chúng ta cần cài thư viện dotenv
// nếu process.env.PORT bị undefined thì cũng ta thêm ||3000 để nó sẽ lấy giá trị 3000
const port = process.env.PORT || 8080;
/*
app.use() handles all the middleware functions
middleware gọi là phần mềm trung gian
nó hoạt động như cách cửa giữ hai router
từ một router này sang một router khác thì nó sẽ qua hàm này
*/
app.use((req, res, next) => {
    //check => return res.send()
    console.log('>>> run into my middleware')
    console.log(req.method)
    next();
})

/*
là một middleware trong Node.js được sử dụng để ghi lại các thông tin 
về request như URL, HTTP method, status code, response time và kích thước của response.
Nó giúp cho việc debug và phân tích lỗi trở nên dễ dàng hơn
https://github.com/expressjs/morgan
*/
app.use(morgan('combined'))

// cấu hình để cho dữ liệu trên client post về server dạng object;
/*
https://www.geeksforgeeks.org/express-js-express-urlencoded-function/
*/
app.use(express.urlencoded({ extended: true }));

/*
là một middleware trong Node.js được sử dụng để phân tích các thông 
tin được gửi đến server từ client dưới dạng JSON và lưu trữ chúng trong đối tượng req.body.
https://masteringjs.io/tutorials/express/express-json
*/
app.use(express.json());

// setup view engine
configViewEngine(app);

// hàm này sẽ khởi tạo các route. tức đường dẫn của trang web
initWebRoute(app);


initAPIRoute(app);

//handle 404 not found
app.use((req, res) => {
    return res.render('404.ejs')
})

// để ứng dụng chạy được, chúng ta phải nói cho express biết chúng ta muốn chạy trên cổng nào
// chúng ta truyền vào hàm listen một port sau đó là một callback function
// tức là khi ứng dụng bạn chạy lên rồi nó mới chạy vào hàm callback
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})

