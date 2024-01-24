// import React from 'react'
import "./footer.moudle.css"
import IconFb from '../../assets/icon/icon-fb'
import IconIs from '../../assets/icon/icon-is'
import IconTw from '../../assets/icon/icon-tw'
function Footer() {
    return (
        <>
            <div style={{ backgroundColor: "#f7f7f7", width: "100%", bottom: 0, left: 0 }}>
                <div className="footer__intro">
                    <p>Nguồn cảm hứng cho những kỳ nghỉ sau này</p>
                </div>
                <div className="footer__info flex justify-around">
                    <div className="f__infol f__text">
                        <p>Hỗ trợ</p>
                        <p>Trung tâm hỗ trợ</p>
                        <p>AirCover</p>
                        <p>Chống phân biệt đối xử</p>
                        <p>Hỗ trợ người khuyết tật</p>
                        <p>Các tùy chọn hủy</p>
                        <p>Báo cáo lo ngại của khu dân cư</p>
                    </div>
                    <div className="f__infoc f__text">
                        <p>Đón tiếp khách</p>
                        <p>Cho thuê nhà trên Airbnb</p>
                        <p>AirCover cho Chủ nhà</p>
                        <p>Tài nguyên về đón tiếp khách</p>
                        <p>Diễn đàn cộng đồng</p>
                        <p>Đón tiếp khách có trách nhiệm</p>
                    </div>
                    <div className="f__infor f__text">
                        <p>Airbnb</p>
                        <p>Trang tin tức</p>
                        <p>Tính năng mới</p>
                        <p>Cơ hội nghề nghiệp</p>
                        <p>Nhà đầu tư</p>
                        <p>Chỗ ở khẩn cấp Airbnb.org</p>
                    </div>
                </div>
                <hr style={{ width: "100%", color: "#DDDDDD", boxShadow: " 0 0 5px #ccc", marginBottom: "2rem" }} />
                <div className="footer__end flex justify-between">
                    <div className="end__text flex">
                        <p>© 2023 Airbnb, Inc.</p>
                        <p>Quyền riêng tư</p>
                        <p>Điều khoản</p>
                        <p>Sơ đồ trang web</p>
                    </div>
                    <div className="end__icon flex">
                        <IconFb />
                        <IconIs />
                        <IconTw />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer