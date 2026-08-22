package org.fpt.blooddonate.utils;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import jakarta.mail.Message;
import jakarta.mail.MessagingException;
import jakarta.mail.PasswordAuthentication;
import jakarta.mail.Session;
import jakarta.mail.Transport;
import jakarta.mail.internet.InternetAddress;
import jakarta.mail.internet.MimeMessage;
import org.fpt.blooddonate.models.BloodDonationRequest;
import org.fpt.blooddonate.models.BloodReceiveRequest;
import org.fpt.blooddonate.models.User;

import java.nio.file.Files;
import java.nio.file.Path;
import java.util.Properties;

public class SendEmail {
    public static void changeBloodDonationRequestStatus(User user, BloodDonationRequest bloodDonationRequest, String status) {
        String username = resolveSetting("SMTP_USERNAME");
        String password = resolveSetting("SMTP_PASSWORD");
        if (username.isBlank() || password.isBlank()) {
            return;
        }
        Session session = createSession(username, password);

        try {
            Message message = new MimeMessage(session);
            message.setFrom(new InternetAddress(username));
            message.setRecipients(
                Message.RecipientType.TO,
                InternetAddress.parse(user.getEmail())
            );

            if (status.equals("xacnhan")) {
                message.setSubject("Xác nhận yêu cầu hiến máu");
                message.setContent(SendEmail.getBloodDonationRequestWhenApproved(user, bloodDonationRequest), "text/html; charset=utf-8");
            } else if (status.equals("tuchoi")) {
                message.setSubject("Từ chối yêu cầu hiến máu");
                message.setContent(SendEmail.getBloodDonationRequestWhenRejected(user, bloodDonationRequest), "text/html; charset=utf-8");
            } else if (status.equals("dahien")) {
                message.setSubject("Yêu cầu hiến máu hoàn thiện");
                message.setContent(SendEmail.getBloodDonationRequestWhenCompleted(user, bloodDonationRequest), "text/html; charset=utf-8");
            } else {
                message.setSubject("Thay Đổi trạng thái của yêu cầu hiến máu");
                message.setText("Xin chào " + user.getEmail() + "\n. Yêu cầu hiến máu với mã #" + bloodDonationRequest.getId() + " đã được chuyển sang trạng thái " + status);
            }

            Transport.send(message);
        } catch (Exception e) {
            System.out.println(e.getMessage());
        }
    }

    private static String getBloodDonationRequestWhenCompleted(User user, BloodDonationRequest bloodDonationRequest) throws JsonProcessingException {
        ObjectMapper mapper = new ObjectMapper();
        ThongTinHienMau formKham = mapper.readValue(bloodDonationRequest.getFormKham(), ThongTinHienMau.class);
        return String.format("""
            <!DOCTYPE html>
            <html lang="vi">
            <head>
              <meta charset="UTF-8" />
              <style>
                body {
                  font-family: Arial, sans-serif;
                  color: #333;
                  line-height: 1.6;
                  background-color: #f5f5f5;
                  padding: 20px;
                }
                .email-container {
                  max-width: 600px;
                  margin: auto;
                  background-color: #ffffff;
                  padding: 30px;
                  border-radius: 8px;
                  border: 1px solid #ddd;
                }
                h2 {
                  color: #d32f2f;
                }
                ul, ol {
                  padding-left: 20px;
                }
                li {
                  margin-bottom: 8px;
                }
                .section-title {
                  font-weight: bold;
                  margin-top: 20px;
                  margin-bottom: 10px;
                  color: #1a237e;
                }
                .info-item {
                  margin-bottom: 5px;
                }
                .note {
                  margin-top: 20px;
                  font-style: italic;
                  color: #555;
                }
              </style>
            </head>
            <body>
              <div class="email-container">
                <p>Chào <strong>%s</strong> &lt;3</p>
            
                <p>✦ Chúc mừng và cảm ơn bạn đã hoàn thành quy trình hiến máu tại cơ sở của chúng tôi! Nghĩa cử của bạn không chỉ mang lại niềm hy vọng cho nhiều người bệnh mà còn góp phần làm cuộc sống trở nên tốt đẹp hơn.</p>
            
                <p>✦ Dưới đây là các thông tin y tế được ghi nhận trong lần hiến máu này:</p>
            
                <ul>
                  <li>➤ <strong>Chiều cao:</strong> %s</li>
                  <li>➤ <strong>Cân nặng:</strong> %s</li>
                  <li>➤ <strong>Huyết áp (mmHg):</strong> %s</li>
                  <li>➤ <strong>Nhiệt độ cơ thể:</strong> %s</li>
                  <li>➤ <strong>Sử dụng rượu bia, chất kích thích:</strong> %s</li>
                  <li>➤ <strong>Đang dùng thuốc:</strong> %s</li>
                  <li>➤ <strong>Điều kiện huyết sắc tố:</strong> %s</li>
                  <li>➤ <strong>Các bệnh mãn tính:</strong> %s</li>
                  <li>➤ <strong>Bệnh có nguy cơ lây nhiễm qua đường máu:</strong> %s</li>
                  <li>➤ <strong>Kết luận/Ghi chú của cơ sở y tế:</strong> %s</li>
                </ul>
            
                <div class="section-title">Một số lưu ý nhỏ để bạn phục hồi nhanh hơn sau khi hiến máu:</div>
                <ol>
                  <li>Tránh vận động mạnh, làm việc nặng trong vòng 1-2 ngày tiếp theo</li>
                  <li>Bổ sung thêm thực phẩm giàu sắt, protein tốt như thịt đỏ, trứng, rau xanh, cam quýt... để tái tạo máu hiệu quả</li>
                  <li>Không sử dụng rượu bia, chất kích thích sau khi hiến máu</li>
                  <li>Nếu cảm thấy mệt mỏi, chóng mặt, đau vết kim hoặc có bất kỳ triệu chứng bất thường nào, đừng ngần ngại sử dụng chức năng yêu cầu hỗ trợ để được trợ giúp kịp thời</li>                  
                </ol>
            
                <p class="note">
                  ✦ Chúng tôi xin gửi lời cảm ơn chân thành nhất đến bạn và gia đình đã tin tưởng, phối hợp cùng đội ngũ nhân viên y tế trong suốt quá trình hiến máu. Sự lạc quan và vững vàng của bạn chính là nguồn động lực lớn cho tập thể y bác sĩ cũng như cộng đồng những người hiến máu. Chúc bạn luôn mạnh khỏe, sớm hồi phục hoàn toàn và gặp nhiều may mắn, hạnh phúc trong cuộc sống. Nếu cần bất kỳ sự hỗ trợ nào, xin đừng ngần ngại liên hệ với chúng tôi.
                </p>
                <p class="note">✦ Trân trọng cảm ơn!</p>
              </div>
            </body>
            </html>
            """,
                user.getTen(),
                formKham.chieuCao,
                formKham.canNang,
                formKham.huyetAp,
                formKham.nhietDo,
                formKham.suDungChatKichThich,
                formKham.dangDungThuoc,
                formKham.kiemTraHuyetSacTo,
                formKham.benhManTinh,
                formKham.nguyCoLayNhiem,
                formKham.ketLuan);
    }

    private static String getLoaiHienMau(BloodDonationRequest bloodDonationRequest) {
        if (bloodDonationRequest.getLoaiHien().equals("toanphan")) {
            return "Toàn phần";
        } else if (bloodDonationRequest.getLoaiHien().equals("huyettuong")) {
            return "Huyết tương";
        } else if (bloodDonationRequest.getLoaiHien().equals("hongcau")) {
            return "Hồng cầu";
        } else {
            return "Tiểu cầu";
        }
    }

    private static String getBloodDonationRequestWhenApproved(User user, BloodDonationRequest bloodDonationRequest) {
        return String.format("""
            <!DOCTYPE html>
            <html lang="vi">
            <head>
              <meta charset="UTF-8" />
              <style>
                body {
                  font-family: Arial, sans-serif;
                  color: #333;
                  line-height: 1.6;
                  background-color: #f5f5f5;
                  padding: 20px;
                }
                .email-container {
                  max-width: 600px;
                  margin: auto;
                  background-color: #ffffff;
                  padding: 30px;
                  border-radius: 8px;
                  border: 1px solid #ddd;
                }
                h2 {
                  color: #d32f2f;
                }
                ul, ol {
                  padding-left: 20px;
                }
                li {
                  margin-bottom: 8px;
                }
                .section-title {
                  font-weight: bold;
                  margin-top: 20px;
                  margin-bottom: 10px;
                  color: #1a237e;
                }
                .info-item {
                  margin-bottom: 5px;
                }
                .note {
                  margin-top: 20px;
                  font-style: italic;
                  color: #555;
                }
              </style>
            </head>
            <body>
              <div class="email-container">
                <p>Chào <strong>%s</strong> &lt;3</p>
            
                <p>✦ Chúng tôi đã nhận được đăng ký hiến máu của bạn với các thông tin sau:</p>
            
                <ul>
                  <li>➤ <strong>Ngày hiến máu:</strong> %s</li>
                  <li>➤ <strong>Loại hiến máu:</strong> %s</li>
                  <li>➤ <strong>Số lượng máu hiến:</strong> %s ml</li>
                  <li>➤ <strong>Sức khỏe hiện tại:</strong> %s</li>
                  <li>➤ <strong>Đang mang thai:</strong> %s</li>
                  <li>➤ <strong>Mắc bệnh truyền nhiễm:</strong> %s</li>
                </ul>
            
                <div class="section-title">Tips chuẩn bị trước khi hiến máu giúp đảm bảo an toàn & sức khỏe tốt nhất:</div>
                <ol>
                  <li>Ngủ đủ giấc (tối thiểu 6 tiếng) trước ngày hiến máu</li>
                  <li>Ăn nhẹ, tránh ăn đồ nhiều mỡ, nhiều đạm trước khi hiến máu</li>
                  <li>Không sử dụng rượu bia hay chất kích thích trước ngày hiến máu</li>
                  <li>Uống nhiều nước trong 24h trước hiến máu</li>
                  <li>Mang theo giấy tờ tùy thân khi đi hiến máu</li>
                  <li>Chuẩn bị tâm lý thoải mái, tự tin</li>
                </ol>
            
                <p class="note">
                  ✦ Nếu bạn có câu hỏi hoặc cần điều chỉnh thông tin, vui lòng liên hệ lại.<br />
                  Cảm ơn bạn đã chung tay vì cộng đồng!
                </p>
              </div>
            </body>
            </html>
            """, user.getTen(), bloodDonationRequest.getNgayHienMauDuKien(), SendEmail.getLoaiHienMau(bloodDonationRequest), bloodDonationRequest.getSoLuong(), bloodDonationRequest.getSucKhoeHienTai(), bloodDonationRequest.getDangMangThai() == 0 ? "Không" : "Có", bloodDonationRequest.getMacBenhTruyenNhiem() == 0 ? "Không" : "Có");
    }

    private static String getBloodDonationRequestWhenRejected(User user, BloodDonationRequest bloodDonationRequest) {
        return String.format("""
            <!DOCTYPE html>
            <html lang="vi">
            <head>
              <meta charset="UTF-8" />
              <style>
                body {
                  font-family: Arial, sans-serif;
                  color: #333;
                  line-height: 1.6;
                  background-color: #f5f5f5;
                  padding: 20px;
                }
                .email-container {
                  max-width: 600px;
                  margin: auto;
                  background-color: #ffffff;
                  padding: 30px;
                  border-radius: 8px;
                  border: 1px solid #ddd;
                }
                h2 {
                  color: #d32f2f;
                }
                ul, ol {
                  padding-left: 20px;
                }
                li {
                  margin-bottom: 8px;
                }
                .section-title {
                  font-weight: bold;
                  margin-top: 20px;
                  margin-bottom: 10px;
                  color: #1a237e;
                }
                .info-item {
                  margin-bottom: 5px;
                }
                .note {
                  margin-top: 20px;
                  font-style: italic;
                  color: #555;
                }
              </style>
            </head>
            <body>
              <div class="email-container">
                <p>Chào <strong>%s</strong> &lt;3</p>
            
                <p>✦ Chúng tôi đã nhận được đăng ký hiến máu của bạn với các thông tin sau:</p>
            
                <ul>
                  <li>➤ <strong>Ngày hiến máu:</strong> %s</li>
                  <li>➤ <strong>Loại hiến máu:</strong> %s</li>
                  <li>➤ <strong>Số lượng máu hiến:</strong> ml%s</li>
                  <li>➤ <strong>Sức khỏe hiện tại:</strong> %s</li>
                  <li>➤ <strong>Đang mang thai:</strong> %s</li>
                  <li>➤ <strong>Mắc bệnh truyền nhiễm:</strong> %s</li>
                </ul>
            
                <p>Rất tiếc, sau khi xét duyệt, hiện tại bạn chưa đáp ứng đủ điều kiện để tham gia hiến máu theo quy định của cơ sở y tế. Quyết định này nhằm đảm bảo an toàn sức khỏe cho chính bạn và cộng đồng. Dù chưa thể tham gia lần này, nghĩa cử của bạn vẫn luôn được trân trọng và khích lệ! Hãy thử lại với các mốc thời gian phù hợp với tình trạng sức khỏe, và quay lại khi bạn sẵn sàng nhé. Nếu cần giải đáp thêm thông tin, bạn có thể liên hệ với chúng tôi bất cứ lúc nào.</p>
              </div>
            </body>
            </html>
            """, user.getTen(), bloodDonationRequest.getNgayHienMauDuKien(), SendEmail.getLoaiHienMau(bloodDonationRequest), bloodDonationRequest.getSoLuong(), bloodDonationRequest.getSucKhoeHienTai(), bloodDonationRequest.getDangMangThai() == 0 ? "Không" : "Có", bloodDonationRequest.getMacBenhTruyenNhiem() == 0 ? "Không" : "Có");
    }

    public static void changeBloodReceiveRequestStatus(User user, BloodReceiveRequest bloodReceiveRequest, String status) {
        String username = resolveSetting("SMTP_USERNAME");
        String password = resolveSetting("SMTP_PASSWORD");
        if (username.isBlank() || password.isBlank()) {
            return;
        }
        Session session = createSession(username, password);

        try {
            Message message = new MimeMessage(session);
            message.setFrom(new InternetAddress(username));
            message.setRecipients(
                    Message.RecipientType.TO,
                    InternetAddress.parse(user.getEmail())
            );

            if (status.equals("dacomau")) {
                message.setSubject("Đã có máu");
                message.setContent(SendEmail.getBloodDonationReceiveWhenApproved(user, bloodReceiveRequest), "text/html; charset=utf-8");
            } else if (status.equals("huy")) {
                message.setSubject("Huỷ yêu cầu nhận máu");
                message.setContent(SendEmail.getBloodDonationReceiveWhenRejected(user, bloodReceiveRequest), "text/html; charset=utf-8");
            } else if (status.equals("dahoanthanh")) {
                message.setSubject("Yêu cầu nhận máu đã hoàn thành");
                message.setContent(SendEmail.getBloodDonationReceiveWhenCompleted(user, bloodReceiveRequest), "text/html; charset=utf-8");
            } else {
                message.setSubject("Thay Đổi trạng thái của yêu cầu nhận máu");
                message.setText("Xin chào " + user.getEmail() + "\n. Yêu cầu nhận máu với mã #" + bloodReceiveRequest.getId() + " đã được chuyển sang trạng thái " + status);
            }

            Transport.send(message);
        } catch (Exception e) {
            System.out.println(e.getMessage());
        }
    }

    private static String getBloodDonationReceiveWhenApproved(User user, BloodReceiveRequest bloodReceiveRequest) {
        return String.format("""
            <!DOCTYPE html>
            <html lang="vi">
            <head>
              <meta charset="UTF-8" />
              <style>
                body {
                  font-family: Arial, sans-serif;
                  color: #333;
                  line-height: 1.6;
                  background-color: #f5f5f5;
                  padding: 20px;
                }
                .email-container {
                  max-width: 600px;
                  margin: auto;
                  background-color: #ffffff;
                  padding: 30px;
                  border-radius: 8px;
                  border: 1px solid #ddd;
                }
                h2 {
                  color: #d32f2f;
                }
                ul, ol {
                  padding-left: 20px;
                }
                li {
                  margin-bottom: 8px;
                }
                .section-title {
                  font-weight: bold;
                  margin-top: 20px;
                  margin-bottom: 10px;
                  color: #1a237e;
                }
                .info-item {
                  margin-bottom: 5px;
                }
                .note {
                  margin-top: 20px;
                  font-style: italic;
                  color: #555;
                }
              </style>
            </head>
            <body>
              <div class="email-container">
                <p>Chào <strong>%s</strong> &lt;3</p>
            
                <p>✦ Đơn đăng ký nhận máu của bạn đã được duyệt thành công. Thông tin tiếp nhận như sau:</p>
            
                <ul>
                  <li>➤ <strong>Thành phần máu cần:</strong> %s</li>
                  <li>➤ <strong>Số lượng máu:</strong> %s</li>
                  <li>➤ <strong>Ngày nhận dự kiến:</strong> %s ml</li>
                  <li>➤ <strong>Địa chỉ:</strong> %s</li>
                  <li>➤ <strong>Nhóm máu:</strong> %s</li>
                  <li>➤ <strong>Lý do:</strong> %s</li>
                  <li>➤ <strong>Đang mang thai:</strong> %s</li>
                  <li>➤ <strong>Sức khoẻ hiện tại:</strong> %s</li>
                  <li>➤ <strong>Bệnh truyền nhiễm:</strong> %s</li>
                </ul>
            
                <div class="section-title">Tips chuẩn bị trước khi nhận máu giúp an toàn & phục hồi tốt hơn:</div>
                <ol>
                  <li>Nghỉ ngơi đầy đủ và ngủ ngon giấc vào đêm trước ngày nhận máu</li>
                  <li>Ăn uống hợp lý, tránh để quá đói hoặc quá no trước khi truyền máu</li>
                  <li>Uống nhiều nước, trừ khi được bác sĩ yêu cầu kiêng</li>
                  <li>Mang theo giấy tờ tùy thân, hồ sơ y tế và đơn chỉ định của bác sĩ</li>
                  <li>Thông báo cho nhân viên y tế nếu có tiền sử dị ứng, các bệnh mãn tính hoặc đang dùng thuốc</li>
                  <li>Mặc trang phục thoải mái, dễ vận động</li>
                  <li>Luôn giữ tâm lý thoải mái, chủ động hỏi đáp nếu có điều không rõ</li>
                </ol>
            
                <p class="note">
                  ✦ Nếu bạn có câu hỏi hoặc cần điều chỉnh thông tin, vui lòng liên hệ lại. Cảm ơn bạn đã chung tay vì cộng đồng!
                </p>
              </div>
            </body>
            </html>
            """, user.getTen(),
                bloodReceiveRequest.getThanhPhanMauCan(),
                bloodReceiveRequest.getSoLuongDonVi(),
                bloodReceiveRequest.getNgayNhanMauDuKien(),
                bloodReceiveRequest.getDiaChiNhanMau(),
                bloodReceiveRequest.getNhomMau().getTen(),
                bloodReceiveRequest.getLyDo(),
                bloodReceiveRequest.getDangMangThai() == 0 ? "Không" : "Có",
                bloodReceiveRequest.getSucKhoeHienTai(),
                bloodReceiveRequest.getMacBenhTruyenNhiem() == 0 ? "Không" : "Có");
    }

    private static String getBloodDonationReceiveWhenRejected(User user, BloodReceiveRequest bloodReceiveRequest) throws JsonProcessingException {
        ObjectMapper mapper = new ObjectMapper();
        KetQuaXetNghiem formKham = mapper.readValue(bloodReceiveRequest.getFormKham(), KetQuaXetNghiem.class);
        return String.format("""
            <!DOCTYPE html>
            <html lang="vi">
            <head>
              <meta charset="UTF-8" />
              <style>
                body {
                  font-family: Arial, sans-serif;
                  color: #333;
                  line-height: 1.6;
                  background-color: #f5f5f5;
                  padding: 20px;
                }
                .email-container {
                  max-width: 600px;
                  margin: auto;
                  background-color: #ffffff;
                  padding: 30px;
                  border-radius: 8px;
                  border: 1px solid #ddd;
                }
                h2 {
                  color: #d32f2f;
                }
                ul, ol {
                  padding-left: 20px;
                }
                li {
                  margin-bottom: 8px;
                }
                .section-title {
                  font-weight: bold;
                  margin-top: 20px;
                  margin-bottom: 10px;
                  color: #1a237e;
                }
                .info-item {
                  margin-bottom: 5px;
                }
                .note {
                  margin-top: 20px;
                  font-style: italic;
                  color: #555;
                }
              </style>
            </head>
            <body>
              <div class="email-container">
                <p>Chào <strong>%s</strong> &lt;3</p>
            
                <p>✦ Chúng tôi xin cảm ơn bạn đã đến cơ sở để thực hiện quy trình nhận máu. Sau khi khám sàng lọc, rất tiếc các chỉ số sức khỏe hiện tại của bạn chưa đáp ứng đủ điều kiện an toàn để tiến hành truyền máu theo quy định của cơ sở y tế:</p>
                <p>✦ Dưới đây là thông tin chi tiết liên quan đến đợt truyền máu của bạn:</p>
                <ul>
                  <li>➤ <strong>Thành phần máu cần:</strong> %s</li>
                  <li>➤ <strong>Số lượng máu:</strong> %s</li>
                  <li>➤ <strong>Ngày nhận dự kiến:</strong> %s ml</li>
                  <li>➤ <strong>Địa chỉ:</strong> %s</li>
                  <li>➤ <strong>Nhóm máu:</strong> %s</li>
                  <li>➤ <strong>Lý do:</strong> %s</li>
                  <li>➤ <strong>Đang mang thai:</strong> %s</li>
                  <li>➤ <strong>Sức khoẻ hiện tại:</strong> %s</li>
                  <li>➤ <strong>Bệnh truyền nhiễm:</strong> %s</li>
                </ul>
                <p>Thông tin y tế khi truyền máu:</p>
                  <li>➤ <strong>Huyết áp:</strong> %s</li>
                  <li>➤ <strong>Dấu hiệu nhiễm trùng:</strong> %s</li>
                  <li>➤ <strong>Nhiệt độ:</strong> %s ml</li>
                  <li>➤ <strong>Chiều cao:</strong> %s</li>
                  <li>➤ <strong>Cân nặng:</strong> %s</li>
                  <li>➤ <strong>Dị ứng:</strong> %s</li>
                  <li>➤ <strong>Bệnh lý nền:</strong> %s</li>
                  <li>➤ <strong>Xét nghiệm hòa hợp:</strong> %s</li>
                  <li>➤ <strong>Kiểm tra các kháng thể bất thường:</strong> %s</li>
            
                <div class="section-title">Một số lưu ý giúp bạn giữ sức khỏe và chuẩn bị tốt hơn cho lần tiếp theo:</div>
                <ol>
                  <li>Nghỉ ngơi đầy đủ và ngủ ngon giấc vào đêm trước ngày nhận máu</li>
                  <li>Ăn uống điều độ, bổ sung dinh dưỡng hợp lý</li>
                  <li>Theo dõi sức khỏe tại nhà, tái khám hoặc điều trị bệnh lý nền theo hướng dẫn của bác sĩ</li>
                  <li>Chủ động thông báo cho cơ sở y tế khi có các dấu hiệu bất thường</li>
                  <li>Duy trì tâm trạng tích cực, liên hệ với cán bộ y tế để được tư vấn khi cần thiết</li>
                </ol>
            
                <p class="note">
                  ✦ Chúng tôi rất tiếc khi chưa thể hỗ trợ bạn nhận máu trong lần này. Xin gửi lời cảm ơn chân thành nhất đến bạn đã tin tưởng, phối hợp cùng đội ngũ nhân viên y tế trong suốt quá trình sàng lọc. Hy vọng bạn sẽ sớm cải thiện sức khỏe để tiếp tục nhận được sự hỗ trợ cần thiết hoặc có thể quay lại trong những lần tiếp theo.
                </p>
                <p class="note">
                  ✦ Nếu cần bất kỳ sự hỗ trợ nào, xin đừng ngần ngại liên hệ với chúng tôi.
                </p>
                <p class="note">
                    Trân trọng cảm ơn!
                </p>
              </div>
            </body>
            </html>
            """, user.getTen(),
                bloodReceiveRequest.getThanhPhanMauCan(),
                bloodReceiveRequest.getSoLuongDonVi(),
                bloodReceiveRequest.getNgayNhanMauDuKien(),
                bloodReceiveRequest.getDiaChiNhanMau(),
                bloodReceiveRequest.getNhomMau().getTen(),
                bloodReceiveRequest.getLyDo(),
                bloodReceiveRequest.getDangMangThai() == 0 ? "Không" : "Có",
                bloodReceiveRequest.getSucKhoeHienTai(),
                bloodReceiveRequest.getMacBenhTruyenNhiem() == 0 ? "Không" : "Có",
                formKham.huyetAp,
                formKham.dauHieuNhiemTrung,
                formKham.nhietDo,
                formKham.chieuCao,
                formKham.canNang,
                formKham.diUng,
                formKham.benhLyNen,
                formKham.xetNghiemHoaHop,
                formKham.khangTheBatThuong);
    }

    private static String getBloodDonationReceiveWhenCompleted(User user, BloodReceiveRequest bloodReceiveRequest) throws JsonProcessingException {
        ObjectMapper mapper = new ObjectMapper();
        KetQuaXetNghiem formKham = mapper.readValue(bloodReceiveRequest.getFormKham(), KetQuaXetNghiem.class);
        return String.format("""
            <!DOCTYPE html>
            <html lang="vi">
            <head>
              <meta charset="UTF-8" />
              <style>
                body {
                  font-family: Arial, sans-serif;
                  color: #333;
                  line-height: 1.6;
                  background-color: #f5f5f5;
                  padding: 20px;
                }
                .email-container {
                  max-width: 600px;
                  margin: auto;
                  background-color: #ffffff;
                  padding: 30px;
                  border-radius: 8px;
                  border: 1px solid #ddd;
                }
                h2 {
                  color: #d32f2f;
                }
                ul, ol {
                  padding-left: 20px;
                }
                li {
                  margin-bottom: 8px;
                }
                .section-title {
                  font-weight: bold;
                  margin-top: 20px;
                  margin-bottom: 10px;
                  color: #1a237e;
                }
                .info-item {
                  margin-bottom: 5px;
                }
                .note {
                  margin-top: 20px;
                  font-style: italic;
                  color: #555;
                }
              </style>
            </head>
            <body>
              <div class="email-container">
                <p>Chào <strong>%s</strong> &lt;3</p>
            
                <p>✦ Chúng tôi xin thông báo bạn đã hoàn thành quá trình nhận máu tại cơ sở y tế. Cảm ơn bạn đã hợp tác cùng đội ngũ y bác sĩ để đảm bảo an toàn và hiệu quả điều trị.</p>
                <p>✦ Dưới đây là thông tin chi tiết liên quan đến đợt truyền máu của bạn:</p>
                <ul>
                  <li>➤ <strong>Thành phần máu cần:</strong> %s</li>
                  <li>➤ <strong>Số lượng máu:</strong> %s</li>
                  <li>➤ <strong>Ngày nhận dự kiến:</strong> %s ml</li>
                  <li>➤ <strong>Địa chỉ:</strong> %s</li>
                  <li>➤ <strong>Nhóm máu:</strong> %s</li>
                  <li>➤ <strong>Lý do:</strong> %s</li>
                  <li>➤ <strong>Đang mang thai:</strong> %s</li>
                  <li>➤ <strong>Sức khoẻ hiện tại:</strong> %s</li>
                  <li>➤ <strong>Bệnh truyền nhiễm:</strong> %s</li>
                </ul>
                <p>Thông tin y tế khi truyền máu:</p>
                  <li>➤ <strong>Huyết áp:</strong> %s</li>
                  <li>➤ <strong>Dấu hiệu nhiễm trùng:</strong> %s</li>
                  <li>➤ <strong>Nhiệt độ:</strong> %s ml</li>
                  <li>➤ <strong>Chiều cao:</strong> %s</li>
                  <li>➤ <strong>Cân nặng:</strong> %s</li>
                  <li>➤ <strong>Dị ứng:</strong> %s</li>
                  <li>➤ <strong>Bệnh lý nền:</strong> %s</li>
                  <li>➤ <strong>Xét nghiệm hòa hợp:</strong> %s</li>
                  <li>➤ <strong>Kiểm tra các kháng thể bất thường:</strong> %s</li>
            
                <div class="section-title">Một số lưu ý sau khi truyền máu để phục hồi nhanh và an toàn:</div>
                <ol>
                  <li>Nghỉ ngơi đầy đủ trong ngày đầu, tránh vận động mạnh</li>
                  <li>Uống nhiều nước và ăn uống đủ chất để hỗ trợ phục hồi</li>
                  <li>Theo dõi các biểu hiện bất thường như sốt, ngứa, nổi ban, đau nhức, khó thở... và báo ngay cho nhân viên y tế nếu xuất hiện</li>
                  <li>Dùng thuốc theo đúng hướng dẫn từ bác sĩ, tái khám đúng lịch</li>
                  <li>Giữ tinh thần lạc quan, chủ động hỏi đáp nếu có thắc mắc</li>
                </ol>
            
                <p class="note">
                  ✦ Chúng tôi xin gửi lời cảm ơn chân thành nhất đến bạn và gia đình đã tin tưởng, phối hợp cùng đội ngũ nhân viên y tế trong suốt quá trình tiếp nhận máu.Sự lạc quan và vững vàng của bạn chính là nguồn động lực lớn cho tập thể y bác sĩ cũng như cộng đồng những người hiến máu.Chúc bạn luôn mạnh khỏe, sớm hồi phục hoàn toàn và gặp nhiều may mắn, hạnh phúc trong cuộc sống.      
                </p>
                <p class="note">
                  ✦ Nếu cần bất kỳ sự hỗ trợ nào, xin đừng ngần ngại liên hệ với chúng tôi.
                </p>
                <p class="note">
                    Trân trọng cảm ơn!
                </p>
              </div>
            </body>
            </html>
            """, user.getTen(),
                bloodReceiveRequest.getThanhPhanMauCan(),
                bloodReceiveRequest.getSoLuongDonVi(),
                bloodReceiveRequest.getNgayNhanMauDuKien(),
                bloodReceiveRequest.getDiaChiNhanMau(),
                bloodReceiveRequest.getNhomMau().getTen(),
                bloodReceiveRequest.getLyDo(),
                bloodReceiveRequest.getDangMangThai() == 0 ? "Không" : "Có",
                bloodReceiveRequest.getSucKhoeHienTai(),
                bloodReceiveRequest.getMacBenhTruyenNhiem() == 0 ? "Không" : "Có",
                formKham.huyetAp,
                formKham.dauHieuNhiemTrung,
                formKham.nhietDo,
                formKham.chieuCao,
                formKham.canNang,
                formKham.diUng,
                formKham.benhLyNen,
                formKham.xetNghiemHoaHop,
                formKham.khangTheBatThuong);
    }

    public static void changeSupportTicketStatus(String email, int id, String status) {
        String username = resolveSetting("SMTP_USERNAME");
        String password = resolveSetting("SMTP_PASSWORD");
        if (username.isBlank() || password.isBlank()) {
            return;
        }
        Session session = createSession(username, password);

        try {
            Message message = new MimeMessage(session);
            message.setFrom(new InternetAddress(username));
            message.setRecipients(
                    Message.RecipientType.TO,
                    InternetAddress.parse(email)
            );
            message.setSubject("Thay Đổi trạng thái của yêu cầu hỗ trợ");
            message.setText("Xin chào " + email + "\n. Yêu cầu hỗ trợ với mã #" + id + " đã được chuyển sang trạng thái " + status);
            Transport.send(message);
        } catch (MessagingException e) {
            System.out.println(e.getMessage());
        }
    }

    private static Session createSession(String username, String password) {
        Properties props = new Properties();
        props.put("mail.smtp.auth", "true");
        props.put("mail.smtp.starttls.enable", "true");
        props.put("mail.smtp.host", settingOrDefault("SMTP_HOST", "smtp.gmail.com"));
        props.put("mail.smtp.port", settingOrDefault("SMTP_PORT", "587"));
        return Session.getInstance(props, new jakarta.mail.Authenticator() {
            @Override
            protected PasswordAuthentication getPasswordAuthentication() {
                return new PasswordAuthentication(username, password);
            }
        });
    }

    private static String settingOrDefault(String key, String defaultValue) {
        String value = resolveSetting(key);
        return value.isBlank() ? defaultValue : value;
    }

    private static String resolveSetting(String key) {
        String value = System.getenv(key);
        if (value == null || value.isBlank()) {
            value = System.getProperty(key);
        }
        if (value == null || value.isBlank()) {
            value = readDotEnv(key);
        }
        return value == null ? "" : value.trim();
    }

    private static String readDotEnv(String key) {
        try {
            Path envFile = Path.of(".env");
            if (!Files.isRegularFile(envFile)) {
                return "";
            }
            return Files.readAllLines(envFile).stream()
                    .map(String::trim)
                    .filter(line -> !line.isBlank() && !line.startsWith("#"))
                    .filter(line -> line.startsWith(key + "="))
                    .map(line -> line.substring(key.length() + 1).trim())
                    .map(value -> value.replaceAll("^\\\"|\\\"$|^'|'$", ""))
                    .findFirst()
                    .orElse("");
        } catch (Exception ignored) {
            return "";
        }
    }
}
