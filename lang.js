// Vietnamese translations for the birthday website

const translations = {
    vi: {
        title: "Chúc mừng sinh nhật pà chã iu ❤️",
        description: "Một món quà sinh nhật đặc biệt dành cho pà chã Di",
        login: "Đăng nhập bằng Google",
        logout: "Đăng xuất",
        settings: "Cài đặt website",
        music: "Cài đặt nhạc",
        backgroundMusic: "Nhạc nền:",
        countdown: "Cài đặt đếm ngược",
        countdownTime: "Thời gian đếm ngược:",
        matrix: "Cài đặt hiệu ứng mưa chữ",
        matrixText: "Chữ chạy nền:",
        matrixColor1: "Màu mưa chữ 1:",
        matrixColor2: "Màu mưa chữ 2:",
        sequence: "Cài đặt chữ chính",
        sequenceText: "Nội dung chữ chính:",
        sequenceColor: "Màu chữ chính:",
        gift: "Cài đặt ảnh động",
        giftImage: "Ảnh động tùy chọn:",
        enableBook: "Hiển thị sách:",
        book: "Cài đặt trang sách",
        enableHeart: "Hiển thị hiệu ứng trái tim:",
        note: "Một món quà sinh nhật đặc biệt với tràn đầy tình yêu thương từ ăm chã iu của em.",
        follow: "Một món quà sinh nhật đặc biệt với tràn đầy tình yêu thương từ ăm chã iu của em.",
        apply: "Áp dụng cài đặt",
        copyright: "Một món quà sinh nhật đặc biệt với tràn đầy tình yêu thương từ ăm chã iu của em.",
        fullscreen: "Toàn màn hình",
        on: "Bật",
        off: "Tắt",
        sec3: "3 giây",
        sec5: "5 giây",
        sec10: "10 giây",
        noGif: "Không có",
        colorTheme: "Chọn màu:",
        settingsHint: "Bấm vào đây để tùy chỉnh cài đặt",
        pinkTheme: "Hồng ngọt ngào",
        blueTheme: "Xanh mát mẻ",
        purpleTheme: "Tím mộng mơ",
        customTheme: "Màu tùy chỉnh",
        noteSequence: "Lưu ý: tách các từ bằng dấu | và không nên để mỗi dòng quá dài",
        noteExpire: "<b>Lưu ý:</b> Một món quà sinh nhật đặc biệt với tràn đầy tình yêu thương từ ăm chã iu của em.",
        followNote: "Một món quà sinh nhật đặc biệt với tràn đầy tình yêu thương từ ăm chã iu của em.",
        notVietnamWarning: "Chúc mừng sinh nhật bé iu! ",
        pageTitleCover: "Trang {num} (Bìa)",
        pageTitle: "Trang {num}",
        imageLabel: "Hình ảnh:",
        coverPlaceholder: "Bìa sách",
        pagePlaceholder: "Trang {num}",
        noImageAlt: "Chưa có ảnh - {placeholder}",
        contentLabel: "Nội dung:",
        contentPlaceholder: "Nhập nội dung cho trang {num}",
        addNewPage: "Thêm trang mới",
        emptyPage: "Trang trống",
        endOfBook: "Hết sách",

        pricingTitle: "Chi phí tạo website",
        voucher: "Mã giảm giá",
        tip: "Ủng hộ thêm:",
        paymentMethod: "Phương thức thanh toán",
        bankPayment: "Chuyển khoản ngân hàng",
        bankPaymentDesc: "Thanh toán bằng QR/ngân hàng nội địa",
        paypalPayment: "Thanh toán PayPal",
        paypalPaymentDesc: "Phù hợp với thẻ quốc tế hoặc tài khoản PayPal",
        total: "Tổng cộng",
        createWebsite: "Tạo website",
        payAndCreate: "Thanh toán và tạo website",
        needLoginVoucher: "Vui lòng đăng nhập để sử dụng mã giảm giá",
        noVoucher: "Bạn chưa có mã giảm giá nào",
        voucherApplied: "Đã áp dụng mã {code}, giảm {discount}",
        defaultConfig: "Cấu hình mặc định",
        defaultMusic: "Nhạc nền mặc định",
        customMusic: "Nhạc nền tùy chỉnh",
        bookEnabled: "Bật sách kỷ niệm",
        extraPage: "Trang thêm",
        heartEffect: "Hiệu ứng trái tim",
        saveForever: "Lưu vĩnh viễn",
        free: "Miễn phí",
        needLogin: "Vui lòng đăng nhập trước khi tạo website",
        createSuccess: "Tạo website thành công!",
        price: "Chi phí:",
        shareLink: "Link chia sẻ:",
        copyLink: "Sao chép link",
        viewWebsite: "Xem website",
        heartQr: "Tạo QR trái tim",
        close: "Đóng",
        thanks: "Cảm ơn bạn đã sử dụng dịch vụ. Theo dõi TikTok để ủng hộ tác giả nhé!",
        tiktokBtn: "Theo dõi TikTok",
        heartQrCopy: "Đã sao chép link. Đang mở trang tạo QR trái tim...",
        copySuccess: "Đã sao chép link!",
        loading: "Đang tải website...",
        waitingIsHappiness: "Đợi một chút, điều hạnh phúc đang đến.",
        invalidPageStructure: "Cấu trúc trang sách chưa hợp lệ",
        currentPages: "Hiện có {total} trang.",
        bookStructureGuide: "Sách cần số trang phù hợp để lật trang đúng cách.",
        pleaseAddOrRemovePage: "Vui lòng thêm hoặc xóa một trang rồi thử lại.",
        expireText: "Thời hạn lưu website:",
        thirtyDays: "30 ngày",
        fullscreenNotSupported: "Trình duyệt của bạn không hỗ trợ chế độ toàn màn hình"
    }
};

function setLanguage(lang) {
    lang = 'vi';
    document.documentElement.lang = lang;

    document.title = translations.vi.title;
    const description = document.querySelector('meta[name="description"]');
    if (description) {
        description.setAttribute('content', translations.vi.description);
    }

    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        const value = translations.vi[key];
        if (!value) return;

        if (value.includes('<b>') || value.includes('<a')) {
            el.innerHTML = value;
        } else {
            el.innerText = value;
        }
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        const value = translations.vi[key];
        if (value) {
            el.setAttribute('placeholder', value);
        }
    });
}

function switchLanguage() {
    setLanguage('vi');
}

document.addEventListener('DOMContentLoaded', () => {
    setLanguage('vi');
    const langBtn = document.getElementById('langSwitchBtn');
    if (langBtn) langBtn.remove();
});

function t(key, vars = {}) {
    let str = (translations.vi && translations.vi[key]) || key;
    Object.keys(vars).forEach(k => {
        str = str.replaceAll(`{${k}}`, vars[k]);
    });
    return str;
}
