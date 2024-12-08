document.addEventListener('DOMContentLoaded', function() {
    const tooltips = document.querySelectorAll('[data-bs-toggle="tooltip"]');

    tooltips.forEach(function(tooltip) {
        tooltip.addEventListener('mouseenter', function() {
            const title = tooltip.getAttribute('title');
            if (title) {
                // Membuat elemen tooltip
                const tooltipElement = document.createElement('div');
                tooltipElement.className = 'custom-tooltip';
                tooltipElement.innerText = title;

                // Posisi tooltip
                const rect = tooltip.getBoundingClientRect();
                tooltipElement.style.position = 'absolute';
                tooltipElement.style.top = `${window.scrollY + rect.top - 35}px`;
                tooltipElement.style.left = `${window.scrollX + rect.left + rect.width / 2}px`;
                tooltipElement.style.transform = 'translateX(-50%)';

                // Tambahkan ke DOM
                document.body.appendChild(tooltipElement);

                // Simpan elemen tooltip untuk dihapus nanti
                tooltip._tooltipElement = tooltipElement;
            }
        });

        tooltip.addEventListener('mouseleave', function() {
            // Hapus elemen tooltip saat mouse keluar
            if (tooltip._tooltipElement) {
                tooltip._tooltipElement.remove();
                tooltip._tooltipElement = null;
            }
        });
    });
});
