import React from "react";
import { BASE_URL } from "../../../config";
import DetailCard from "../../../components/DetailCard";

const CourseDetail = (props) => {
	const item = props.route.params.item;

    const details = {
        "Edad Minima": item.age,
        "Duracion": item.duration,
        "Horas de Vuelo": item.hours,
        "Estudios Minimos": item.studies,
        "Examen Psicofisico": item.psychophysical,
        "Licencias Previas": item.licenses
    }

	return <DetailCard details={details} imgUrl={`${BASE_URL}/courses/img/${item.class}`} title={item.translatedClass} />;
};

export default CourseDetail;
