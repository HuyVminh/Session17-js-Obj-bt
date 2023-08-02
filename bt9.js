// Viết một lớp các đối tượng mô tả loại dữ liệu nhiệt độ lấy tên là Temperature.
// Các thông số mô tả cho nhiệt độ gồm:
// Trị số tính theo đơn vị độ C(giá trị nhỏ nhất - 273 độ)
// Có tính năng chuyển đổi từ độ C sang độ F.
// Có tính năng chuyển đổi từ độ C sang độ Kenvin.
// Sử dụng lớp vừa định nghĩa để xây dựng một chương trình JavaScript với kịch bản như sau:
// Khởi tạo một đối tượng Temperature.
// Gán giá trị độ C cho đối tượng ở nhiệt độ 25 độ.
// Hiển thị ra màn hình nhiệt độ F và độ Kenvin tương ứng.

class Temperature {
    constructor(value) {
        this.value = value;
        this.convertToF = () => {
            return Math.floor(value * 1.8 - 32);
        }
        this.convertToK = () => {
            return Math.floor(value - 273.15);
        }
    }
}
let ob1 = new Temperature(25);
ob1.convertToF();
ob1.convertToK();
console.log(ob1.convertToF());
console.log(ob1.convertToK());