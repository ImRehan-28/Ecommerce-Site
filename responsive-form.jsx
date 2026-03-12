<Grid item xs={12} sm={8} md={7} lg={8} xl={7}>
  <Box className="border rounded-s-md shadow-md p-5">
    <form onSubmit={handleSubmit}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="firstName"
            name="firstName"
            label="First Name"
            fullWidth
            autoComplete="given-name"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="lastName"
            name="lastName"
            label="Last Name"
            fullWidth
            autoComplete="family-name"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="address"
            name="address"
            label="Address"
            fullWidth
            autoComplete="street-address"
            multiline
            rows={4}
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="city"
            name="city"
            label="City"
            fullWidth
            autoComplete="address-level2"
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="state"
            name="state"
            label="State/Province/Region"
            fullWidth
            autoComplete="address-level1"
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="zip"
            name="zip"
            label="Zip/Postal code"
            fullWidth
            autoComplete="postal-code"
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="phoneNumber"
            name="phoneNumber"
            label="Phone Number"
            fullWidth
            autoComplete="tel"
          />
        </Grid>
        <Grid item xs={12}>
          <Button
            sx={{ py: 2, mt: 2, bgcolor: "RGB(145 85 253)" }}
            size="large"
            variant="contained"
            type="submit"
            fullWidth
          >
            Deliver Here
          </Button>
        </Grid>
      </Grid>
    </form>
  </Box>
</Grid>