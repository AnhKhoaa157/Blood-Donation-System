import React, { useEffect, useState } from 'react';
import { Button, Col, Row, Typography, Spin } from 'antd';
import { HeartOutlined, DownloadOutlined, MobileOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import './style/CallToActionSection.css';

const { Title, Paragraph } = Typography;

const CallToActionSection = () => {
  const navigate = useNavigate();
  const [upcomingCampaigns, setUpcomingCampaigns] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Tạm thời disable API call để test
    setLoading(false);
  }, []);

  return (
    <div className="cta-section">
      {/* Background Elements */}
      <div className="cta-background">
        <div className="floating-drop drop-1"></div>
        <div className="floating-drop drop-2"></div>
        <div className="floating-drop drop-3"></div>
      </div>

      <div className="cta-container">
        <Row align="middle" justify="center">
          <Col xs={24} lg={16}>
            <div className="cta-content">
              <div className="cta-icon">
                <HeartOutlined />
              </div>
              
              <Title level={2} className="cta-title">
                Sẵn sàng trở thành <span>người hùng?</span>
              </Title>
              
              <Paragraph className="cta-description">
                Hãy tham gia Hiến Máu Cộng Đồng Việt ngay hôm nay để kết nối với cộng đồng
                và cứu sống những người cần được giúp đỡ.
              </Paragraph>

              <div className="cta-buttons">
                <Button 
                  type="primary" 
                  size="large" 
                  className="cta-primary-btn"
                  onClick={() => navigate('/login')}
                  icon={<HeartOutlined />}
                >
                  Tôi muốn hiến máu
                </Button>
              </div>

              {/* Real Upcoming Campaigns */}
              {loading ? (
                <div style={{ textAlign: 'center', margin: '20px 0' }}>
                  <Spin size="large" />
                </div>
              ) : upcomingCampaigns.length > 0 && (
                <div className="upcoming-campaigns">
                  <Paragraph className="campaigns-title" style={{ color: '#6b7280', fontSize: '16px', fontWeight: '600' }}>
                    🗓️ Chiến dịch sắp diễn ra:
                  </Paragraph>
                  <div className="campaigns-list">
                    {upcomingCampaigns.map((campaign, index) => (
                      <div key={campaign.id} className="campaign-item">
                        <div className="campaign-icon">🩸</div>
                        <div className="campaign-text">
                          <div style={{ fontWeight: 'bold' }}>{campaign.title}</div>
                          <div style={{ fontSize: '14px', opacity: 0.9 }}>
                            📍 {campaign.location} • 📅 {new Date(campaign.startDate).toLocaleDateString('vi-VN')}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default CallToActionSection;
