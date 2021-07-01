import React from "react";
import {
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@material-ui/core";

export default function conCard() {
  return (
    <div>
      <Grid container spacing={2}>
        <Grid item sm={12}>
          <Typography
            style={{
              fontFamily: "sans-serif",
              fontWeight: "600",
              fontSize: "24px",
            }}
            color="grey"
          >
            Conference details 
          </Typography>
        </Grid>
        <Grid item sm={3}></Grid>
        <Grid item sm={2}>
          <Card>
           
            <CardContent>
              <Typography> DISRUPTION IN AFRICA</Typography>
            </CardContent>
            <CardContent>
              <Typography> CFA Society South Africa Annual Investment Conference - a CPD Programme Event</Typography>
            </CardContent>
            <CardContent>
              <Typography>Thursday, 25th July 2019</Typography>
            </CardContent>
            <CardContent>
              <Typography>The Maslow Hotel, Sandton</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item sm={2}>
          <Card>
    
          <CardContent>
              <Typography> 2021 CIT INTERNATIONAL CONFERENCE</Typography>
            </CardContent>
            <CardContent>
              <Typography>TURNING UP THE HEAT WITH CIT TRANSFORMING CRISIS RESPONSE SYSTEMS</Typography>
            </CardContent>
            <CardContent>
              <Typography>August 16 - 2021</Typography>
            </CardContent>
            <CardContent>
              <Typography>J.W. Marriott Phoenix Desert Ridge Resort and Spa
                  5350 East Marriott Drive ~ Phoenix, AZ ~ 85054</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item sm={2}>
          <Card>
           
          <CardContent>
              <Typography> IBA Annual Conference Miami 2022</Typography>
            </CardContent>
            <CardContent>
              <Typography>International Bar Association
                             the global voice of the legal profession</Typography>
            </CardContent>
            <CardContent>
              <Typography> 30 Oct -2021</Typography>
            </CardContent>
            <CardContent>
              <Typography>Miami Beach Convention Center, Miami Beach, USA</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item sm={3}></Grid>
      </Grid>
    </div>
  );
}
