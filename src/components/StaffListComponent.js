import React, { Component } from "react";
import { Card, CardImg, CardBody, CardTitle, Row } from "reactstrap";
import dateFormat from "dateformat";

class StaffList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      staffSelected: null,
    };
  }

  renderStaffSelected(item) {
    console.log(item);
    if (item != null) {
      return (
        <div className="my-5">
          <h2 className="text-center">Chi tiết nhân viên</h2>
          <Card>
            <div>
              <div className="row">
                <div className="text-center">
                  <img className="avatar" src={item.image} />
                  <h4>Họ và Tên: {item.name}</h4>
                </div>
              </div>
              <div className="row">
                <div className="col-6">
                  <p>Ngày sinh: {dateFormat(item.doB, "dd/mm/yyyy")}</p>
                  <p>
                    Ngày vào công ty: {dateFormat(item.startDate, "dd/mm/yyyy")}
                  </p>
                  <p>Phòng ban: {item.department.name}</p>
                </div>
                <div className="col-6">
                  <p>Số ngày nghỉ còn lại: {item.annualLeave}</p>
                  <p>Số ngày làm thêm: {item.overTime}</p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      );
    } else {
      return <div>Bấm vào tên nhân viên để xem thông tin</div>;
    }
  }
  render() {
    const list = this.props.staffs.map((staff) => {
      return (
        <div>
          <Card
            key={staff.id}
            onClick={() => this.setState({ staffSelected: staff })}
          >
            <CardImg
              top
              src={staff.image}
              alt={staff.image}
              className="avatar"
            />
            <CardBody className="text-center">
              <CardTitle>
                <strong>{staff.name}</strong>
              </CardTitle>
            </CardBody>
          </Card>
        </div>
      );
    });

    return (
      <div className="container">
        <Row md={this.props.sodong} sm="2" xs="1">
          {list}
        </Row>
        <div className="row">
          <div className="col-md-12 col-sm-12 col-xs-12 text-center">
            {this.renderStaffSelected(this.state.staffSelected)}
          </div>
        </div>
      </div>
    );
  }
}

export default StaffList;
