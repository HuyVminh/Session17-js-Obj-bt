// Viết một lớp các đối tượng điện thoại lấy tên là Mobile,
// mỗi một chiếc mobile phone khi được tạo ra sẽ mang những đặc điểm sau:
class Mobile {
    constructor() {
        // Có một thông số về trạng thái pin tính bằng đơn vị số nguyên(tối đa 100 đv).
        this.battery = 50;
        this.statusOn = true;
        // Có một vùng nhớ dùng để lưu tin nhắn đang soạn thảo.
        this.storageMess = [];
        // Có một vùng nhớ dùng để lưu tin nhắn trong hộp thư đến.
        this.deliveredMessStorage = [];
        // Có một vùng nhớ dùng để lưu tin nhắn đã gửi.
        this.sendMessStorage = [];
        // Có chức năng kiểm tra trạng thái điện thoại bật hay tắt.
        this.mobileCheckOnOff = () => {
            return this.statusOn;
        }
        // Có chức năng bật và tắt điện thoại.
        this.mobileOnOff = (value) => {
            this.battery--;
            if (value) {
                this.statusOn = true
            } else {
                this.statusOn = false
            }
        }
        // Có chức năng sạc pin điện thoại.
        this.chargeBattery = () => {
            this.battery++;
            console.log("đang sạc điện thoại");
        }
        // Có chức năng soạn tin nhắn.
        this.messCreate = (tinNhan) => {
            if (this.battery) {
                this.battery--;
                this.storageMess.push(tinNhan);
                console.log(this.storageMess);
            } else {
                console.log("May da tat, ko soan tin nhan dc");
            }
        }
        // Có chức năng nhận tin nhắn từ một chiếc mobile khác.
        this.deliveredMessByMobile = () => {
            console.log("bạn có tin nhắn mới");
        }
        // Có chức năng gửi tin nhắn tới một chiếc mobile khác.
        this.sendMessToMobile = (dienthoai) => {
            if (this.battery) {
                this.sendMessStorage.push(this.storageMess[this.storageMess.length - 1]);
                dienthoai.deliveredMessStorage.push(this.storageMess[this.storageMess.length - 1]);
            } else {
                console.log("bạn không thể gửi tin nhắn");
            }
        }
        // Có chức năng xem tin trong hộp thư đến.
        this.readMessBox = () => {
            console.log(this.deliveredMessStorage);
        }
        // Có chức năng xem tin đã gửi.
        this.seeSendMess = () => {
            console.log(this.sendMessStorage);
        }
        // Sau mỗi lần sử dụng một chức năng, năng lượng pin sẽ giảm đi một đơn vị.
        // this.downBattery = () => {
        //     this.battery > 0 ? this.battery-- : this.mobileOnOff(false);
        //     console.log("Pin: ", this.battery);
        // }
        // Các chức năng không thể hoạt động nếu điện thoại chưa bật.
        this.viewPin = () => {
            return this.battery;
        }
    }
}

let nokia = new Mobile();
nokia.messCreate("Xin chao");
console.log(nokia.viewPin());
nokia.messCreate("Xin chao 1");
console.log(nokia.viewPin());
nokia.messCreate("Xin chao 2");
console.log(nokia.viewPin());

let iphone = new Mobile();

nokia.sendMessToMobile(iphone)
console.log("tin nhan ben iphone");
console.log(iphone.deliveredMessStorage);