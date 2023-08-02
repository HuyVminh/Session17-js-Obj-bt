// Viết một lớp các đối tượng hình chữ nhật lấy tên là Rectangle,
// mỗi hình chữ nhật đều có những đặc tính sau:
// Có thông số chiều dài(int).
// Có thông số chiều rộng(int).
// Có tính năng tính diện tích.
// Có tính năng tính chu vi.
class Rectangle{
    constructor(width, heigth) {
        this.width = width;
        this.heigth = heigth;
        this.area = this.width * this.heigth;
        this.perimeter = 2 * (this.heigth + this.width);
    }
}

// Sử dụng lớp Rectangle vừa định nghĩa để viết một chương trình JavaScript với kịch bản như sau:
// Khai báo và khởi tạo một đối tượng kiểu Rectangle.
// Hiển thị hình chữ nhật trên màn hình web.
// Thay đổi chiều dài và chiều rộng của hình chữ nhật.
// In ra màn hình diện tích và chu vi của hình chữ nhật đó.

let rec1 = new Rectangle(a, b);
let a = +prompt("Nhập chiều dài của hình chữ nhật");
let b = +prompt("Nhập chiều dài của hình chữ nhật");
console.log(rec1);