import React, { useState } from "react";
import {
  Box,
  Button,
  Dialog,
  Divider,
  Icon,
  Stack,
  TextField,
  TextareaAutosize,
  Typography,
} from "@mui/material";
import axios from "axios";
import {
  Facebook,
  LocalPhone,
  LocationOn,
  Mail,
  Telegram,
  YouTube,
} from "@mui/icons-material";

const Contact = () => {
  const [submissionStatus, setSubmissionStatus] = useState(null);
  const [openSuccessDialog, setOpenSuccessDialog] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const name = event.target.name.value;
    const email = event.target.email.value;
    const message = event.target.Message.value;

    try {
      const response = await axios.post("http://localhost:8000/feed/feedback", {
        name,
        email,
        message,
      });

      console.log("Response:", response.data);
      setSubmissionStatus("success");
      setOpenSuccessDialog(true); // Open success dialog
    } catch (error) {
      console.error("Error:", error);
      setSubmissionStatus("error");
    }
  };

  const handleCloseSuccessDialog = () => {
    setOpenSuccessDialog(false); // Close success dialog
  };

  return (
    <Stack
      sx={{ padding: "1rem 6%", backgroundColor: "#001F3F90", width: "100%" }}
      direction={"column"}
      gap={7}
      alignItems={"center"}
      id={"contact"}
    >
      <Typography variant="h3" sx={{ color: "#FFD700", fontWeight: "500" }}>
        Contact Us
      </Typography>
      <Stack
      direction="row"
      alignItems="stretch"
      justifyContent="center"
      sx={{ width: '70%', backgroundColor: '#f2f2f2', padding: '20px' }}
      flexWrap="wrap"
    >
      <div style={{ backgroundColor: 'white', padding: '20px', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}>
        <h2 style={{ marginBottom: '10px' }}>Welcome to Our Online Platform</h2>
        <p style={{ fontSize: '16px', marginBottom: '20px' }}>Explore our platform for all your needs!</p>
        <ul style={{ listStyleType: 'none', padding: 0 }}>
          <li style={{ marginBottom: '10px' }}>
            <a href="link-to-android-app" style={{ textDecoration: 'none', color: '#007bff' }}>📱 Android App</a> - Access on your Android device
          </li>
          <li style={{ marginBottom: '10px' }}>
            <a href="link-to-ios-app" style={{ textDecoration: 'none', color: '#007bff' }}>🍏 iOS App</a> - Enjoy on your iOS device
          </li>
          <li>
            <a href="link-to-desktop-app" style={{ textDecoration: 'none', color: '#007bff' }}>💻 Desktop App</a> - Experience on your computer
          </li>
        </ul>
      </div>
    </Stack>

      <Stack
        direction={"row"}
        alignItems={"stretch"}
        justifyContent={"center"}
        sx={{ width: "70%" }}
        flexWrap={"wrap"}
      >
        <Box
          component={"form"}
          onSubmit={handleSubmit}
          sx={{
            backgroundColor: "#FFFFFF",
            flex: "1 1 50%",
            display: "flex",
            flexDirection: "column",
            gap: 4,
            padding: "2rem",
            borderRadius: "10px 0 0 10px ",
          }}
        >
          <Typography>
            Fill free to contact us any time .we will get back to you as soon as
            we can !
          </Typography>
          <Stack
            direction={"column"}
            sx={{ width: "80%", margin: "0 auto" }}
            gap={2}
          >
            <TextField
              id="name"
              label="Name"
              variant="outlined"
              type="text"
              sx={{
                "& .MuiInputBase-root": {
                  borderRadius: 2,
                },
                "& .MuiInputLabel-root": {
                  color: "#222C65",
                },
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "#ccc",
                  },
                  "&:hover fieldset": {
                    borderColor: "#aaa",
                  },
                },
              }}
            />
            <TextField
              id="email"
              label="Email"
              variant="outlined"
              type="text"
              sx={{
                "& .MuiInputBase-root": {
                  borderRadius: 2,
                },
                "& .MuiInputLabel-root": {
                  color: "#222C65",
                },
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "#ccc",
                  },
                  "&:hover fieldset": {
                    borderColor: "#aaa",
                  },
                },
              }}
            />

            <TextareaAutosize
              id="Message"
              aria-label="Message"
              placeholder="Message"
              variant="outlined"
              minRows={5}
              maxRows={5}
              style={{
                width: "100%",
                padding: "8px",
                borderRadius: 8,
                borderColor: "#ccc",
                resize: "none",
                fontSize: "16px",
                "&:hover": {
                  borderColor: "#aaa",
                },
              }}
            />

            <Button variant="contained" type="submit">
              Send
            </Button>
             <Dialog
              open={openSuccessDialog}
              onClose={handleCloseSuccessDialog}
              aria-labelledby="alert-dialog-title"
              aria-describedby="alert-dialog-description"
            >
              <Box sx={{ p: 2 }}>
                <Typography variant="h6" sx={{ mb: 2 }}>
                  Message sent successfully!
                </Typography>
                <Typography>
                  Thank you for reaching out. We'll get back to you soon.
                </Typography>
                <Button
                  onClick={handleCloseSuccessDialog}
                  color="primary"
                  autoFocus
                >
                  Close
                </Button>
              </Box>
            </Dialog>
          </Stack>
        </Box>

        <Stack
          flex={"1 1 50%"}
          sx={{
            backgroundColor: "#001F3F",
            borderRadius: "0 10px 10px 0",
            padding: "2rem",
            color: "#FFFFFF ",
          }}
          direction={"column"}
          gap={3}
          alignItems={"center"}
        >
       
          <Stack direction={"column"} gap={3}>
          

  <Stack direction={"row"} gap={2}>
    <Icon>
      <LocationOn sx={{ color: "#FFFFFF" }} />
    </Icon>
    <Typography><a href="https://maps.example.com/AddisAbaba">Addis Ababa, 22</a></Typography>
  </Stack>
  <Stack direction={"row"} gap={2}>
    <Icon>
      <LocalPhone sx={{ color: "#FFFFFF" }} />
    </Icon>
    <Typography><a href="tel:+251943013372">+251943013372</a></Typography>
  </Stack>
  <Stack direction={"row"} gap={2}>
    <Icon>
      <Mail sx={{ color: "#FFFFFF" }} />
    </Icon>
    <Typography><a href="mailto:ayzotdams@gmail.com">ayzotdams@gmail.com</a></Typography>
  </Stack>
  <Divider
    sx={{ width: "80%", height: ".2vh", backgroundColor: "gray", margin: "0 auto" }}
  />
  <Stack direction={"row"} gap={2}>
    <Icon>
      <Facebook sx={{ color: "#FFFFFF" }} />
    </Icon>
    <Typography><a href="http://facebook.com/ayzotdms">ayzotdms</a></Typography>
  </Stack>
  <Stack direction={"row"} gap={2}>
    <Icon>
      <YouTube sx={{ color: "#FFFFFF" }} />
    </Icon>
    <Typography><a href="https://youtube.com/@ayzotdm">ayzotdm</a></Typography>
  </Stack>
  <Stack direction={"row"} gap={2}>
  <img
    src="https://cdn4.iconfinder.com/data/icons/social-media-flat-7/64/Social-media_Tiktok-512.png"
    alt="TikTok Icon"
    style={{ width: 24, height: 24, color: "#FFFFFF" }}
  />
  <Typography><a href="https://www.tiktok.com/@ayzotdm">ayzotdams</a></Typography>
</Stack>

  <Stack direction={"row"} gap={2}>
    <Icon>
      <Telegram sx={{ color: "#FFFFFF" }} />
    </Icon>
    <Typography><a href="https://t.me/ayzotdms">@ayzotdams</a></Typography>
  </Stack>
</Stack>

        </Stack>
       
      </Stack>
      
    </Stack>
  );
};

export default Contact;
