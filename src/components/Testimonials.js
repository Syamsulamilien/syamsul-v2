import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, ListGroup } from 'react-bootstrap';
import ReactStars from 'react-rating-stars-component';
import Swal from 'sweetalert2'; // Pastikan SweetAlert2 terinstal

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]); // State untuk menyimpan daftar testimonial
  const [username, setUsername] = useState(''); // State untuk nama pengguna
  const [message, setMessage] = useState(''); // State untuk pesan testimonial
  const [rating, setRating] = useState(0); // State untuk rating
  const [editIndex, setEditIndex] = useState(null); // Indeks testimonial yang sedang diedit
  const [editData, setEditData] = useState({ username: '', message: '', rating: 0 }); // Data untuk testimonial yang sedang diedit
  const [showForm, setShowForm] = useState(false); // State untuk mengatur tampilan form input

  // Fungsi untuk menambah testimonial
  const handleAddTestimonial = (e) => {
    e.preventDefault();
    if (username.trim() && message.trim() && rating > 0) {
      const newTestimonial = { username, message, rating };
      setTestimonials([...testimonials, newTestimonial]);
      setUsername('');
      setMessage('');
      setRating(0);
      setShowForm(false); // Menyembunyikan form setelah submit
    }
  };

  // Fungsi untuk menghapus testimonial
  const handleDelete = (index) => {
    const updatedTestimonials = testimonials.filter((_, i) => i !== index);
    setTestimonials(updatedTestimonials);
  };

  // Fungsi untuk memulai proses edit
  const handleEdit = (index) => {
    setEditIndex(index);
    setEditData(testimonials[index]);
  };

  // Fungsi untuk menyimpan perubahan testimonial
  const handleSaveEdit = () => {
    const updatedTestimonials = testimonials.map((testimonial, index) =>
      index === editIndex ? editData : testimonial
    );
    setTestimonials(updatedTestimonials);
    setEditIndex(null);
    setEditData({ username: '', message: '', rating: 0 });
  };

 // Fungsi untuk menampilkan SweetAlert
const handleLearnMore = (index) => {
    Swal.fire({
      title: 'What do you want to do?',
      showCancelButton: true,
      confirmButtonText: 'Edit', // Tombol Edit
      cancelButtonText: 'Delete', // Tombol Delete
      icon: 'question',
    }).then((result) => {
      if (result.isConfirmed) {
        handleEdit(index); // Jika memilih Edit
      } else if (result.isDismissed) {
        handleDelete(index); // Jika memilih Delete
      }
    });
  };
  

  return (
    <Container className="py-5 bg-light">
      <h2 className="text-center mb-4">Testimonials</h2>
      <Row>
        <Col md={8} className="mx-auto">
          {/* Tombol untuk menampilkan form input testimonial */}
          <Button
                variant="primary"
                className="mb-4"
                onClick={() => setShowForm(!showForm)} // Toggle form tampil/sembunyi
                style={{
                    backgroundColor: '#6c757d', // Warna tombol
                    color: 'white', // Warna teks
                    border: 'none', // Menghilangkan border
                    transition: 'background-color 0.3s ease', // Efek transisi
                }}
                onMouseEnter={(e) => (e.target.style.backgroundColor = '#6c757d')} // Efek hover
                onMouseLeave={(e) => (e.target.style.backgroundColor = '#121212')} // Kembali ke warna asli
                >
  {showForm ? 'Cancel' : 'Add Testimonial'}
</Button>

          {/* Form untuk menambahkan testimonial */}
          {showForm && (
            <Form onSubmit={handleAddTestimonial}>
              <Form.Group className="mb-3">
                <Form.Label>Username</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter your name"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Message</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  placeholder="Write your testimonial"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Rating</Form.Label>
                <ReactStars
                  count={5}
                  size={30}
                  value={rating}
                  onChange={(newRating) => setRating(newRating)}
                  activeColor="#ffd700"
                />
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          )}

          {/* List Testimonials */}
          <ListGroup className="mt-4">
            {testimonials.map((testimonial, index) => (
              <ListGroup.Item key={index} className="d-flex flex-column">
                {editIndex === index ? (
                  <>
                    {/* Form Edit */}
                    <Form.Group className="mb-2">
                      <Form.Control
                        type="text"
                        value={editData.username}
                        onChange={(e) =>
                          setEditData({ ...editData, username: e.target.value })
                        }
                        placeholder="Edit your name"
                      />
                    </Form.Group>
                    <Form.Group className="mb-2">
                      <Form.Control
                        as="textarea"
                        rows={2}
                        value={editData.message}
                        onChange={(e) =>
                          setEditData({ ...editData, message: e.target.value })
                        }
                        placeholder="Edit your message"
                      />
                    </Form.Group>
                    <ReactStars
                      count={5}
                      size={20}
                      value={editData.rating}
                      onChange={(newRating) =>
                        setEditData({ ...editData, rating: newRating })
                      }
                      activeColor="#ffd700"
                    />
                    <div className="mt-2">
                      <Button
                        variant="success"
                        size="sm"
                        className="me-2"
                        onClick={handleSaveEdit}
                      >
                        Save
                      </Button>
                      <Button
                        variant="secondary"
                        size="sm"
                        onClick={() => setEditIndex(null)}
                      >
                        Cancel
                      </Button>
                    </div>
                  </>
                ) : (
                  <>
                    {/* Tampilan Testimonial */}
                    <div className="d-flex justify-content-between">
                      <strong>{testimonial.username}</strong>
                      <ReactStars
                        count={5}
                        size={20}
                        value={testimonial.rating}
                        edit={false}
                        activeColor="#ffd700"
                      />
                    </div>
                    <p className="mb-1">{testimonial.message}</p>
                    <div>
                      <Button
                        size="sm"
                        variant="info"
                        onClick={() => handleLearnMore(index)} // Tombol untuk Edit atau Delete
                      >
                        Learn More
                      </Button>
                    </div>
                  </>
                )}
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
};

export default Testimonials;
