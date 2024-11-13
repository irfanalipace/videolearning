import React, { useState } from "react";
import {
  Typography,
  Container,
  Grid,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  useTheme,
  Box,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const FAQ = () => {
  const [expanded, setExpanded] = useState(false);
  const theme = useTheme();

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Box>
      <Grid
        container
        alignItems="center"
        justifyContent="space-between"
        sx={{ padding: "12px" }}
      >
        <Grid item xs={12}>
          <Typography variant="h5" sx={{ fontWeight: 700, mb: 3 }}>
            FAQ'S
          </Typography>
        </Grid>

        <Grid item xs={12}>
          <Accordion
            expanded={expanded === "panel1"}
            onChange={handleChange("panel1")}
            sx={{ mb: 2 }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="faq1-content"
              id="faq1-header"
              sx={{
                backgroundColor:
                  expanded === "panel1"
                    ? theme.palette.secondary.main
                    : "#E2E2E2",
                color: expanded === "panel1" ? "#fff" : "inherit",
              }}
            >
              <Typography variant="h6">
                How much does it really cost?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="body2">
                This is dependent upon a few things, which include your age and
                health status is very persmal each individual and will typically
                start from ass as per month But a healthy 22 year old could cout
                as Intle as th per month. The most important thing to take into
                consideration is your age. Taking out a policy that lasts 40
                years when you're 20, will cost around El/month Whereas, taking
                out a policy that laste 20 years, when you're 40 will cast you
                £41/month. Se taking insurance out when you're younger will save
                you thousands over the course of the policy, Buy young buy long
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion
            expanded={expanded === "panel2"}
            onChange={handleChange("panel2")}
            sx={{ mb: 2 }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="faq2-content"
              id="faq2-header"
              sx={{
                backgroundColor:
                  expanded === "panel2"
                    ? theme.palette.secondary.main
                    : "#E2E2E2",
                color: expanded === "panel2" ? "#fff" : "inherit",
              }}
            >
              <Typography variant="h6">
                What happens to my mortgage if I pass away?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="body2">
                This is dependent upon a few things, which include your age and
                health status is very persmal each individual and will typically
                start from ass as per month But a healthy 22 year old could cout
                as Intle as th per month. The most important thing to take into
                consideration is your age. Taking out a policy that lasts 40
                years when you're 20, will cost around El/month Whereas, taking
                out a policy that laste 20 years, when you're 40 will cast you
                £41/month. Se taking insurance out when you're younger will save
                you thousands over the course of the policy, Buy young buy long
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion
            expanded={expanded === "panel3"}
            onChange={handleChange("panel3")}
            sx={{ mb: 2 }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="faq3-content"
              id="faq3-header"
              sx={{
                backgroundColor:
                  expanded === "panel3"
                    ? theme.palette.secondary.main
                    : "#E2E2E2",
                color: expanded === "panel3" ? "#fff" : "inherit",
              }}
            >
              <Typography variant="h6">
                How old do I need to be to qualify for life insurance with
                Bequest?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="body2">
                This is dependent upon a few things, which include your age and
                health status is very persmal each individual and will typically
                start from ass as per month But a healthy 22 year old could cout
                as Intle as th per month. The most important thing to take into
                consideration is your age. Taking out a policy that lasts 40
                years when you're 20, will cost around El/month Whereas, taking
                out a policy that laste 20 years, when you're 40 will cast you
                £41/month. Se taking insurance out when you're younger will save
                you thousands over the course of the policy, Buy young buy long
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion
            expanded={expanded === "panel4"}
            onChange={handleChange("panel4")}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="faq4-content"
              id="faq4-header"
              sx={{
                backgroundColor:
                  expanded === "panel4"
                    ? theme.palette.secondary.main
                    : "#E2E2E2",
                color: expanded === "panel4" ? "#fff" : "inherit",
              }}
            >
              <Typography variant="h6">How much cover do I need?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="body2">
                This is dependent upon a few things, which include your age and
                health status is very persmal each individual and will typically
                start from ass as per month But a healthy 22 year old could cout
                as Intle as th per month. The most important thing to take into
                consideration is your age. Taking out a policy that lasts 40
                years when you're 20, will cost around El/month Whereas, taking
                out a policy that laste 20 years, when you're 40 will cast you
                £41/month. Se taking insurance out when you're younger will save
                you thousands over the course of the policy, Buy young buy long
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Grid>
      </Grid>
    </Box>
  );
};

export default FAQ;
