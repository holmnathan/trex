import React, { useState, useRef } from 'react';
import Form from 'react-validation/build/form';
import Input from 'react-validation/build/input';
import TextArea from 'react-validation/build/textarea';
import CheckButton from 'react-validation/build/button';
import FormGroup from 'react-bootstrap/FormGroup';
import FormLabel from 'react-bootstrap/FormLabel';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/col';
import Row from 'react-bootstrap/row';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import ModalForm from '../ModalForm';
import { XCircle, CheckCircle, PencilSquare } from 'react-bootstrap-icons';
import AuthService from '../../services/auth.service';
import { addTrip } from '../../services/trip.service';

const { getCurrentUser } = AuthService;

const validRequired = (value) => {
  if (!value) {
    return <Alert variant="warning">This Field is Required</Alert>;
  }
};

const AddTripForm = (props) => {
  const form = useRef();
  const checkBtn = useRef();

  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [description, setDescription] = useState('');
  const [message, setMessage] = useState('');
  const [successful, setSuccessful] = useState(false);

  const onChangeName = (e) => {
    const name = e.target.value;
    setName(name);
  };

  const onChangeLocation = (e) => {
    const location = e.target.value;
    setLocation(location);
  };

  const onChangeStartDate = (date) => {
    setStartDate(date);
  };

  const onChangeEndDate = (date) => {
    setEndDate(date);
  };

  const onChangeDescription = (e) => {
    const description = e.target.value;
    setDescription(description);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    setMessage('');
    setSuccessful(false);

    form.current.validateAll();

    if (checkBtn.current.context._errors.length === 0) {
      const travelers = getCurrentUser()._id;
      const tripCandidate = {
        name,
        location,
        startDate,
        endDate,
        description,
        travelers,
      };
      try {
        const trip = await addTrip(tripCandidate);
        console.log('TRIP: ', trip);
        setMessage(`${trip.data.name} | ${trip.data.message}`);
        setSuccessful(true);
      } catch (error) {
        const resMessage =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();

        setMessage(resMessage);
      }
    }
  };

  const formBody = (
    <Form id="form-add-trip" onSubmit={handleSubmit} ref={form}>
      {!successful && (
        <>
          <Row>
            <Col>
              <FormGroup>
                <FormLabel htmlFor="name">Name</FormLabel>
                <Input
                  type="text"
                  className="form-control"
                  name="name"
                  value={name}
                  onChange={onChangeName}
                  validations={[validRequired]}
                />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col>
              <FormGroup>
                <FormLabel htmlFor="location">Location</FormLabel>
                <Input
                  type="text"
                  className="form-control"
                  name="location"
                  value={location}
                  onChange={onChangeLocation}
                  validations={[validRequired]}
                />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col>
              <FormGroup>
                <FormLabel htmlFor="startDate">Start Date</FormLabel>
                <DatePicker
                  className="form-control"
                  isClearable
                  selected={startDate}
                  onChange={onChangeStartDate}
                  selectsStart
                  startDate={startDate}
                  endDate={endDate}
                />
                <Input
                  hidden
                  type="date"
                  className="form-control"
                  name="startDate"
                  value={startDate}
                  validations={[validRequired]}
                />
              </FormGroup>
            </Col>
            <Col>
              <FormGroup>
                <FormLabel htmlFor="startDate">End Date</FormLabel>
                <DatePicker
                  className="form-control"
                  isClearable
                  selected={endDate}
                  onChange={onChangeEndDate}
                  selectsEnd
                  startDate={startDate}
                  endDate={endDate}
                  minDate={startDate}
                />
                <Input
                  hidden
                  type="date"
                  className="form-control"
                  name="endDate"
                  value={endDate}
                  validations={[validRequired]}
                />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col>
              <FormGroup>
                <FormLabel htmlFor="description">Description</FormLabel>
                <TextArea
                  className="form-control"
                  name="description"
                  value={description}
                  onChange={onChangeDescription}
                />
              </FormGroup>
            </Col>
          </Row>
        </>
      )}

      {message && (
        <FormGroup>
          <div
            className={
              successful ? 'alert alert-success' : 'alert alert-danger'
            }
            role="alert"
          >
            {message}
          </div>
        </FormGroup>
      )}
      <CheckButton style={{ display: 'none' }} ref={checkBtn} />
    </Form>
  );

  const modalTitle = (
    <>
      <PencilSquare className="m-1" />
      New Trip
    </>
  );

  const modalFooter = (
    <>
      {!successful && (
        <>
          <Button variant="secondary" onClick={props.toggleAddTripModal}>
            <XCircle className="m-1" />
            Cancel
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            <CheckCircle className="m-1" />
            Add Trip
          </Button>
        </>
      )}

      {successful && (
        <Button variant="primary" onClick={props.toggleAddTripModal}>
          <CheckCircle className="m-1" />
          Done
        </Button>
      )}
    </>
  );

  return (
    <ModalForm
      title={modalTitle}
      footer={modalFooter}
      isOpen={props.addTripModal}
    >
      {formBody}
    </ModalForm>
  );
};

export default AddTripForm;
