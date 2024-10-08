import axiosInstance from '../helpers/axiosConfig';
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const usePostData = (url, onSubmit, inputs, validations = {}) => {
    const navigate = useNavigate();

    const validateInputs = () => {
        if (!validations || Object.keys(validations).length === 0) {
            return true; // Si no hay validaciones, se considera como válido
        }

        for (const [field, rules] of Object.entries(validations)) {
            for (const rule of rules) {
                if (!rule.validate(inputs[field])) {
                    Swal.fire({
                        icon: "error",
                        iconColor: "#007BFF",
                        title: "Error de validación",
                        text: rule.message,
                        confirmButtonColor: "#007BFF",
                        customClass: {
                            container: 'swal2-container',
                            popup: 'swal2-popup'
                        }
                    });
                    return false;
                }
            }
        }
        return true;
    };

    const acceptSubmit = async () => {
        try {
            await axiosInstance.post(`${import.meta.env.VITE_API_URL}/${url}`, inputs);
            Swal.fire({
                title: "¡Bien!",
                text: "La información ha sido guardada correctamente.",
                icon: "success",
                iconColor: "#007BFF",
                showConfirmButton: false,
                timer: 2500,
                customClass: {
                    container: 'swal2-container',
                    popup: 'swal2-popup'
                }
            }).then(() => {
                onSubmit();
                navigate("/admin", { replace: true });
            });
        } catch (error) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Parece que hubo un error: por favor verifique los datos.",
                confirmButtonColor: "#6fc390",
                customClass: {
                    container: 'swal2-container',
                    popup: 'swal2-popup'
                }
            });
            console.log(error);
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (validateInputs()) {
            confirmSubmit();
        }
    };

    const confirmSubmit = () => {
        Swal.fire({
            title: '¿Estás seguro?',
            text: "Confirma que la información sea correcta.",
            icon: 'warning',
            iconColor: '#007BFF',
            showCancelButton: true,
            confirmButtonColor: '#007BFF',
            cancelButtonColor: '#81d4fa',
            confirmButtonText: 'Sí, estoy seguro!',
            cancelButtonText: 'Cancelar',
            customClass: {
                container: 'swal2-container',
                popup: 'swal2-popup'
            }
        }).then((result) => {
            if (result.isConfirmed) {
                acceptSubmit();
            }
        });
    }

    return handleSubmit;
};

export default usePostData;
