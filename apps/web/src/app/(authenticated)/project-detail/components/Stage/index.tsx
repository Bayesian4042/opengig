import { Card } from "antd";

export const Stage = ({ name, status, isLast }) => {
  return (
    <div className="stage-container">
    <Card title={name} bordered={true} style={{ width: 300 }}>
      
    </Card>
    {!isLast && <div className="connector"></div>}
  </div>
  );
};
