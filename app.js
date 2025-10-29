// Estado de la aplicación
let notas = [];
let notaAdicional = 0;

// Clave para localStorage
const STORAGE_KEY_NOTAS = 'calculadora_notas_datos';
const STORAGE_KEY_NOTA_ADICIONAL = 'calculadora_notas_adicional';

// Elementos del DOM
const notaInput = document.getElementById('notaInput');
const descripcionInput = document.getElementById('descripcionInput');
const agregarBtn = document.getElementById('agregarBtn');
const notasList = document.getElementById('notasList');
const notaAdicionalInput = document.getElementById('notaAdicionalInput');

// Elementos de resultados
const notaMediaEl = document.getElementById('notaMedia');
const notaMedia70El = document.getElementById('notaMedia70');
const notaAdicional30El = document.getElementById('notaAdicional30');
const notaFinalEl = document.getElementById('notaFinal');

// Event listeners
agregarBtn.addEventListener('click', agregarNota);
notaInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        descripcionInput.focus();
    }
});
descripcionInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        agregarNota();
    }
});
notaAdicionalInput.addEventListener('input', () => {
    notaAdicional = parseFloat(notaAdicionalInput.value) || 0;
    guardarDatos();
    actualizarResultados();
});

// Función para agregar una nueva nota
function agregarNota() {
    const nota = parseFloat(notaInput.value);
    const descripcion = descripcionInput.value.trim();

    if (isNaN(nota) || nota < 0 || nota > 10) {
        alert('Por favor, ingresa una nota válida entre 0 y 10');
        return;
    }

    if (!descripcion) {
        alert('Por favor, ingresa una descripción para la asignatura');
        return;
    }

    // Agregar la nota al array
    const nuevaNota = {
        id: Date.now(),
        valor: nota,
        descripcion: descripcion
    };

    notas.push(nuevaNota);

    // Limpiar inputs
    notaInput.value = '';
    descripcionInput.value = '';
    notaInput.focus();

    // Actualizar la vista y resultados
    guardarDatos();
    renderizarNotas();
    actualizarResultados();
}

// Función para renderizar la lista de notas
function renderizarNotas() {
    if (notas.length === 0) {
        notasList.innerHTML = '<p class="empty-message">No hay notas agregadas. Agrega tu primera nota arriba.</p>';
        return;
    }

    notasList.innerHTML = notas.map(nota => `
        <div class="nota-item" data-id="${nota.id}">
            <div class="nota-info">
                <span class="nota-descripcion" data-id="${nota.id}">${escapeHtml(nota.descripcion)}</span>
                <input type="text" class="nota-descripcion-input" data-id="${nota.id}" value="${escapeHtml(nota.descripcion)}">
                <span class="nota-valor" data-id="${nota.id}">${nota.valor.toFixed(2)}</span>
                <input type="number" class="nota-valor-input" data-id="${nota.id}" value="${nota.valor}" min="0" max="10" step="0.01">
            </div>
            <div class="nota-actions">
                <button class="btn btn-edit edit-btn" data-id="${nota.id}">Editar</button>
                <button class="btn btn-delete delete-btn" data-id="${nota.id}">Eliminar</button>
            </div>
        </div>
    `).join('');

    // Event listeners para editar y eliminar
    document.querySelectorAll('.edit-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const id = parseInt(e.target.dataset.id);
            toggleEdicion(id);
        });
    });

    document.querySelectorAll('.delete-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const id = parseInt(e.target.dataset.id);
            eliminarNota(id);
        });
    });

    // Event listeners para los inputs de edición
    document.querySelectorAll('.nota-descripcion-input').forEach(input => {
        input.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                guardarEdicion(parseInt(e.target.dataset.id));
            }
            if (e.key === 'Escape') {
                cancelarEdicion(parseInt(e.target.dataset.id));
            }
        });
        input.addEventListener('blur', (e) => {
            guardarEdicion(parseInt(e.target.dataset.id));
        });
    });

    document.querySelectorAll('.nota-valor-input').forEach(input => {
        input.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                guardarEdicion(parseInt(e.target.dataset.id));
            }
            if (e.key === 'Escape') {
                cancelarEdicion(parseInt(e.target.dataset.id));
            }
        });
        input.addEventListener('blur', (e) => {
            guardarEdicion(parseInt(e.target.dataset.id));
        });
    });
}

// Función para alternar modo edición
function toggleEdicion(id) {
    const nota = notas.find(n => n.id === id);
    if (!nota) return;

    const item = document.querySelector(`.nota-item[data-id="${id}"]`);
    const estaEditando = item.querySelector('.descripcion-editing') || 
                         item.querySelector('.nota-descripcion').classList.contains('editing');

    if (estaEditando) {
        guardarEdicion(id);
    } else {
        // Activar modo edición
        item.querySelector('.nota-descripcion').classList.add('editing');
        item.querySelector('.nota-descripcion-input').classList.add('editing');
        item.querySelector('.nota-valor').classList.add('editing');
        item.querySelector('.nota-valor-input').classList.add('editing');
        
        const editBtn = item.querySelector('.edit-btn');
        editBtn.textContent = 'Guardar';
        editBtn.classList.add('descripcion-editing');
        
        // Focus en el input de descripción
        item.querySelector('.nota-descripcion-input').focus();
        item.querySelector('.nota-descripcion-input').select();
    }
}

// Función para guardar la edición
function guardarEdicion(id) {
    const nota = notas.find(n => n.id === id);
    if (!nota) return;

    const item = document.querySelector(`.nota-item[data-id="${id}"]`);
    const nuevaDescripcion = item.querySelector('.nota-descripcion-input').value.trim();
    const nuevoValor = parseFloat(item.querySelector('.nota-valor-input').value);

    if (!nuevaDescripcion) {
        alert('La descripción no puede estar vacía');
        item.querySelector('.nota-descripcion-input').focus();
        return;
    }

    if (isNaN(nuevoValor) || nuevoValor < 0 || nuevoValor > 10) {
        alert('La nota debe ser un número entre 0 y 10');
        item.querySelector('.nota-valor-input').focus();
        return;
    }

    // Actualizar la nota
    nota.descripcion = nuevaDescripcion;
    nota.valor = nuevoValor;

    // Desactivar modo edición
    item.querySelector('.nota-descripcion').classList.remove('editing');
    item.querySelector('.nota-descripcion-input').classList.remove('editing');
    item.querySelector('.nota-valor').classList.remove('editing');
    item.querySelector('.nota-valor-input').classList.remove('editing');
    
    const editBtn = item.querySelector('.edit-btn');
    editBtn.textContent = 'Editar';
    editBtn.classList.remove('descripcion-editing');

    // Actualizar la vista
    guardarDatos();
    renderizarNotas();
    actualizarResultados();
}

// Función para cancelar la edición
function cancelarEdicion(id) {
    const item = document.querySelector(`.nota-item[data-id="${id}"]`);
    if (!item) return;

    // Desactivar modo edición sin guardar
    item.querySelector('.nota-descripcion').classList.remove('editing');
    item.querySelector('.nota-descripcion-input').classList.remove('editing');
    item.querySelector('.nota-valor').classList.remove('editing');
    item.querySelector('.nota-valor-input').classList.remove('editing');
    
    const editBtn = item.querySelector('.edit-btn');
    editBtn.textContent = 'Editar';
    editBtn.classList.remove('descripcion-editing');

    // Restaurar valores originales
    renderizarNotas();
}

// Función para eliminar una nota
function eliminarNota(id) {
    if (confirm('¿Estás seguro de que quieres eliminar esta nota?')) {
        notas = notas.filter(n => n.id !== id);
        guardarDatos();
        renderizarNotas();
        actualizarResultados();
    }
}

// Función para calcular y actualizar resultados
function actualizarResultados() {
    let notaMedia = 0;
    
    if (notas.length > 0) {
        const suma = notas.reduce((acc, nota) => acc + nota.valor, 0);
        notaMedia = suma / notas.length;
    }

    const notaMedia70 = notaMedia * 0.7;
    const notaAdicional30 = notaAdicional * 0.3;
    const notaFinal = notaMedia70 + notaAdicional30;

    // Actualizar elementos del DOM
    notaMediaEl.textContent = notaMedia.toFixed(2);
    notaMedia70El.textContent = notaMedia70.toFixed(2);
    notaAdicional30El.textContent = notaAdicional30.toFixed(2);
    notaFinalEl.textContent = notaFinal.toFixed(2);
}

// Función helper para escapar HTML (prevenir XSS)
function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

// Funciones de persistencia con localStorage
function guardarDatos() {
    try {
        localStorage.setItem(STORAGE_KEY_NOTAS, JSON.stringify(notas));
        localStorage.setItem(STORAGE_KEY_NOTA_ADICIONAL, notaAdicional.toString());
    } catch (e) {
        console.error('Error al guardar datos:', e);
        // Si localStorage está lleno o no disponible, mostraremos un mensaje
        if (e.name === 'QuotaExceededError') {
            alert('El almacenamiento local está lleno. Por favor, elimina algunas notas.');
        }
    }
}

function cargarDatos() {
    try {
        // Cargar notas
        const notasGuardadas = localStorage.getItem(STORAGE_KEY_NOTAS);
        if (notasGuardadas) {
            notas = JSON.parse(notasGuardadas);
            // Convertir IDs a números si son strings (por compatibilidad)
            notas = notas.map(nota => ({
                ...nota,
                id: parseInt(nota.id) || nota.id
            }));
        }

        // Cargar nota adicional
        const notaAdicionalGuardada = localStorage.getItem(STORAGE_KEY_NOTA_ADICIONAL);
        if (notaAdicionalGuardada !== null) {
            notaAdicional = parseFloat(notaAdicionalGuardada) || 0;
            notaAdicionalInput.value = notaAdicional;
        }
    } catch (e) {
        console.error('Error al cargar datos:', e);
        // Si hay un error, inicializamos con valores por defecto
        notas = [];
        notaAdicional = 0;
    }
}

// Inicializar: cargar datos guardados y mostrar en pantalla
cargarDatos();
renderizarNotas();
actualizarResultados();

