import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { ROUTE_PATHS } from "../routes";
import { useTranslation } from "react-i18next";

export default function DefaultView() {
  const { t } = useTranslation();

  return (
    <Link to={ROUTE_PATHS.MEASURE_TIME}>
      <Button
        variant="contained"
        color="primary"
        size="large"
        sx={{ color: "white", fontWeight: "bold" }}
      >
        {t("Record times")}
      </Button>
    </Link>
  );
}
