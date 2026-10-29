/**
 * EPORTFOLIO 1 PPL MANDIRI - FADILATUL FAJRI
 * Application Controller: Modul Ajar, Media Ajar, Bahan Ajar & Lightbox Modal
 * Style: Editorial Minimalist & Warm Aesthetic
 */

document.addEventListener('DOMContentLoaded', () => {
  initApp();
});

function initApp() {
  const data = window.PORTFOLIO_DATA;
  if (!data) {
    console.error("Portfolio data not found!");
    return;
  }

  // DOM Elements
  const artifactModal = document.getElementById('artifact-modal');
  const artifactModalBody = document.getElementById('artifact-modal-body');
  const closeModalBtn = document.getElementById('close-modal-btn');
  const mobileMenuTrigger = document.getElementById('mobile-menu-trigger');
  const mobileNavMenu = document.getElementById('mobile-nav-menu');

  initMobileMenu();
  initPreviewButtons();
  initScrollNav();
  initLiquidNav();
  initFigmaPhotoFlipper();
  initRopeCanvas();
  initAccordionGallery();

  // Modal Close Action
  if (closeModalBtn && artifactModal) {
    closeModalBtn.addEventListener('click', () => {
      artifactModal.classList.add('hidden');
    });
    artifactModal.addEventListener('click', (e) => {
      if (e.target === artifactModal) {
        artifactModal.classList.add('hidden');
      }
    });
  }

  // Mobile Menu Toggle
  function initMobileMenu() {
    if (mobileMenuTrigger && mobileNavMenu) {
      mobileMenuTrigger.addEventListener('click', () => {
        mobileNavMenu.classList.toggle('hidden');
      });
      mobileNavMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => mobileNavMenu.classList.add('hidden'));
      });
    }
  }

  // Attach Document Preview Listeners across the page
  function initPreviewButtons() {
    document.querySelectorAll('.btn-preview-doc').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const file = btn.dataset.file;
        const name = btn.dataset.name;
        const title = btn.dataset.title;
        openDocumentModal(file, name, title);
      });
    });
  }

  // -------------------------------------------------------------
  // Dynamic Scroll Navigation (Kotak Tumpul -> Oval Menggantung)
  // -------------------------------------------------------------
  function initScrollNav() {
    const navWrapper = document.getElementById('main-nav-wrapper');
    if (!navWrapper) return;

    const handleScroll = () => {
      if (window.scrollY > 40) {
        navWrapper.classList.add('is-scrolled');
      } else {
        navWrapper.classList.remove('is-scrolled');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
  }

  // -------------------------------------------------------------
  // Animasi Gumpalan Air Berpindah (Liquid Water Blob Animation)
  // -------------------------------------------------------------
  function initLiquidNav() {
    const track = document.getElementById('nav-links-track');
    const blob = document.getElementById('nav-liquid-blob');
    if (!track || !blob) return;

    const items = track.querySelectorAll('.nav-link-item');
    if (items.length === 0) return;

    let currentActive = track.querySelector('.nav-link-item.is-active') || items[0];
    let lastLeft = 0;
    let stretchTimer = null;

    function moveBlob(target, withStretch = true) {
      if (!target) return;

      const newLeft = target.offsetLeft;
      const newWidth = target.offsetWidth;
      const newHeight = target.offsetHeight;
      const newTop = target.offsetTop;

      // Efek gumpalan air meregang elastis saat berpindah
      if (withStretch && blob.style.opacity === '1') {
        const movingRight = newLeft > lastLeft;
        blob.classList.remove('is-stretching-left', 'is-stretching-right');
        blob.classList.add(movingRight ? 'is-stretching-right' : 'is-stretching-left');

        clearTimeout(stretchTimer);
        stretchTimer = setTimeout(() => {
          blob.classList.remove('is-stretching-left', 'is-stretching-right');
        }, 220);
      }

      lastLeft = newLeft;

      blob.style.left = `${newLeft}px`;
      blob.style.top = `${newTop}px`;
      blob.style.width = `${newWidth}px`;
      blob.style.height = `${newHeight}px`;
      blob.style.opacity = '1';
    }

    // Set posisi awal gumpalan air
    if (currentActive) {
      setTimeout(() => moveBlob(currentActive, false), 150);
    }

    items.forEach(item => {
      item.addEventListener('mouseenter', () => {
        moveBlob(item, true);
      });

      item.addEventListener('click', () => {
        items.forEach(i => i.classList.remove('is-active'));
        item.classList.add('is-active');
        currentActive = item;
      });
    });

    track.addEventListener('mouseleave', () => {
      if (currentActive) {
        moveBlob(currentActive, true);
      } else {
        blob.style.opacity = '0';
      }
    });

    window.addEventListener('resize', () => {
      if (currentActive) {
        moveBlob(currentActive, false);
      }
    });
  }

  // -------------------------------------------------------------
  // Open Document Lightbox Modal with Real PDF Embed
  // -------------------------------------------------------------
  function openDocumentModal(file, name, title) {
    if (!artifactModal || !artifactModalBody) return;

    const hasRealPdf = file && file !== '#' && file.endsWith('.pdf');

    artifactModalBody.innerHTML = `
      <div class="p-6 md:p-8 space-y-6 bg-[#F4F0EA] text-[#262626]">
        
        <!-- Modal Header -->
        <div class="border-b border-[#D8D1C5] pb-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <div class="flex items-center gap-2 mb-1.5">
              <span class="font-mono text-xs bg-[#E65F2B] text-white px-2.5 py-0.5 font-bold uppercase tracking-wider">
                Dokumen Resmi PPL Mandiri 1
              </span>
              <span class="font-mono text-xs text-[#66615B]">
                SMPN 5 Purwokerto • UMP
              </span>
            </div>
            <h3 class="font-heading text-xl md:text-2xl font-extrabold text-[#262626]">
              ${name}
            </h3>
            <p class="font-body text-xs text-[#66615B] mt-0.5">
              Bagian: <strong class="text-[#E65F2B]">${title}</strong>
            </p>
          </div>

          <div class="flex items-center gap-2">
            ${
              hasRealPdf 
                ? `
                  <a 
                    href="${file}" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    class="btn-editorial-solid text-xs px-4 py-2 inline-flex items-center gap-1.5"
                  >
                    <span>Buka Penuh</span>
                    <span>↗</span>
                  </a>
                  <a 
                    href="${file}" 
                    download
                    class="btn-editorial-outline text-xs px-4 py-2 inline-flex items-center gap-1.5 bg-white"
                  >
                    <span>Unduh PDF</span>
                    <span>↓</span>
                  </a>
                `
                : ''
            }
          </div>
        </div>

        <!-- Document Viewer / Preview Box -->
        ${
          hasRealPdf
            ? `
              <div class="bg-white border border-[#D8D1C5] overflow-hidden">
                <iframe 
                  src="${file}" 
                  class="w-full h-[65vh] border-0" 
                  title="${name}"
                ></iframe>
              </div>
            `
            : `
              <div class="p-8 bg-white border border-[#D8D1C5] text-center space-y-3">
                <div class="w-12 h-12 bg-[#FAECE5] text-[#E65F2B] border border-[#E65F2B]/30 flex items-center justify-center font-bold text-xl mx-auto">
                  §
                </div>
                <h4 class="font-heading font-bold text-base text-[#262626]">${name}</h4>
                <p class="font-body text-xs text-[#5A554E] max-w-md mx-auto leading-relaxed">
                  Perangkat media interaktif dan instrumen pembelajaran ini telah diimplementasikan dalam siklus pembelajaran di ruang Kelas VIII D SMP Negeri 5 Purwokerto.
                </p>
              </div>
            `
        }

        <!-- Document Verification Strip -->
        <div class="p-4 bg-white border border-[#D8D1C5] font-mono text-[11px] text-[#66615B] flex flex-wrap items-center justify-between gap-3">
          <div>
            Mahasiswa Praktikan: <strong class="text-[#262626]">Fadilatul Fajri, S.Pd.</strong>
          </div>
          <div>
            Status: <span class="text-[#E65F2B] font-bold">Terverifikasi DPL & Guru Pamong</span>
          </div>
        </div>

        <!-- Footer Modal -->
        <div class="flex items-center justify-between pt-2">
          <span class="text-xs text-[#8E887F] font-mono">Format: PDF Digital Akademik</span>
          <button 
            onclick="document.getElementById('artifact-modal').classList.add('hidden')" 
            class="px-5 py-2 bg-[#262626] hover:bg-[#E65F2B] text-xs font-bold text-white transition-colors"
          >
            Tutup Pratinjau
          </button>
        </div>

      </div>
    `;

    artifactModal.classList.remove('hidden');
  }

  // -------------------------------------------------------------
  // Interaktivitas Foto Section 2: Flip 3D saat klik JPG / PNG / SVG / PDF
  // -------------------------------------------------------------
  function initFigmaPhotoFlipper() {
    const exportMenu = document.getElementById('figma-export-menu');
    const flipper = document.getElementById('figma-photo-flipper');
    if (!exportMenu || !flipper) return;

    const exportButtons = exportMenu.querySelectorAll('.figma-export-item');
    const badge = document.getElementById('active-format-badge');

    exportButtons.forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const format = btn.dataset.format; // 'JPG', 'PNG', 'SVG', 'PDF'
        
        // Update selected state in export menu
        exportButtons.forEach(b => b.classList.remove('is-selected'));
        btn.classList.add('is-selected');

        // Update badge text on the back face if PNG/SVG/PDF
        if (badge && format !== 'JPG') {
          badge.textContent = format;
        }

        // 3D Flip Action:
        // JPG -> Foto Formal (Front face: is-flipped removed)
        // PNG, SVG, PDF -> Foto 2 (Back face: is-flipped added)
        if (format === 'JPG') {
          flipper.classList.remove('is-flipped');
        } else {
          flipper.classList.add('is-flipped');
        }
      });
    });

    // Klik langsung pada foto juga memicu flip bolak-balik antara JPG dan PNG
    flipper.addEventListener('click', () => {
      const isCurrentlyFlipped = flipper.classList.contains('is-flipped');
      const targetFormat = isCurrentlyFlipped ? 'JPG' : 'PNG';
      const targetBtn = exportMenu.querySelector(`[data-format="${targetFormat}"]`);
      if (targetBtn) {
        targetBtn.click();
      }
    });
  }

  // -------------------------------------------------------------
  // SECTION 3: Interactive Rope Canvas & Draggable Artifact Pills
  // -------------------------------------------------------------
  function initRopeCanvas() {
    const stage = document.getElementById('figma-rope-stage');
    const svg = document.getElementById('figma-rope-svg');
    const ropePath = document.getElementById('rope-path');
    const ropeShadow = document.getElementById('rope-shadow-path');
    const nodesGroup = document.getElementById('rope-nodes-group');
    const cursorGroup = document.getElementById('rope-cursor-group');
    const pillEls = stage ? stage.querySelectorAll('.figma-pill-capsule') : null;

    if (!stage || !svg || !ropePath || !pillEls || pillEls.length === 0) return;

    // Relative pill configurations (cluster resting on rope like in reference screenshot)
    const pillConfigs = [
      { id: 'modul-ajar', rx: -175, ry: -20, rot: -14 },
      { id: 'media-ajar', rx: -55, ry: 5, rot: 3 },
      { id: 'bahan-ajar', rx: -105, ry: -55, rot: -10 },
      { id: 'lkm', rx: 45, ry: -16, rot: -8 },
      { id: 'hasil-kerja-murid', rx: 155, ry: -38, rot: 7 },
      { id: 'video-pembelajaran', rx: 35, ry: -75, rot: -6 },
      { id: 'penilaian-guru-pamong', rx: -190, ry: -78, rot: 9 },
      { id: 'kegiatan-non-mengajar', rx: 115, ry: -110, rot: -11 }
    ];

    const pills = [];

    pillEls.forEach((el, index) => {
      const cfg = pillConfigs[index] || { rx: (index - 4) * 50, ry: -30, rot: (index % 2 === 0 ? -6 : 6) };
      pills.push({
        el: el,
        id: el.dataset.id,
        rx: cfg.rx,
        ry: cfg.ry,
        rot: cfg.rot,
        baseRot: cfg.rot,
        x: 0,
        y: 0,
        width: 140,
        height: 42,
        hasPosition: false,
        isDragging: false
      });
    });

    let stageW = stage.clientWidth;
    let stageH = stage.clientHeight;

    function layoutPills() {
      stageW = stage.clientWidth;
      stageH = stage.clientHeight;
      const centerX = stageW / 2;
      const baseY = stageH * 0.52;

      pills.forEach(p => {
        p.width = p.el.offsetWidth || 140;
        p.height = p.el.offsetHeight || 42;

        if (!p.hasPosition) {
          const scale = stageW < 640 ? 0.62 : (stageW < 1024 ? 0.85 : 1);
          p.x = centerX + (p.rx * scale) - (p.width / 2);
          p.y = baseY + (p.ry * scale) - (p.height / 2);
          p.hasPosition = true;
        }

        p.el.style.transform = `translate3d(${p.x}px, ${p.y}px, 0) rotate(${p.rot}deg)`;
      });

      updateRope();
    }

    function updateRope() {
      const leftY = stageH * 0.52;
      const rightY = stageH * 0.44;

      // Find lowest point and horizontal centroid of pills near middle
      let lowestY = leftY + 28;
      let lowestX = stageW / 2;
      let count = 0;

      pills.forEach(p => {
        const px = p.x + p.width / 2;
        const pyBottom = p.y + p.height + 4;
        if (px > stageW * 0.12 && px < stageW * 0.88) {
          count++;
          if (pyBottom > lowestY) {
            lowestY = pyBottom;
            lowestX = px;
          }
        }
      });

      // Extra sag when multiple pills cluster in the middle
      const extraSag = Math.min(count * 6, 60);
      lowestY = Math.min(lowestY + extraSag, stageH - 50);

      // Kink coordinates
      const pLeftKinkX = Math.max(stageW * 0.18, lowestX - 180);
      const pLeftKinkY = leftY + (lowestY - leftY) * 0.35;

      const pRightKinkX = Math.min(stageW * 0.82, lowestX + 160);
      const pRightKinkY = lowestY - (lowestY - rightY) * 0.4;

      const pFarRightKinkX = Math.min(stageW * 0.92, lowestX + 240);
      const pFarRightKinkY = rightY + 12;

      // Construct SVG vector path: straight left segment -> kinks -> lowest sag V -> kink up -> straight right segment
      const d = `M 0,${leftY} ` +
                `L ${pLeftKinkX},${pLeftKinkY} ` +
                `L ${lowestX - 60},${lowestY - 8} ` +
                `L ${lowestX},${lowestY} ` +
                `L ${pRightKinkX},${pRightKinkY} ` +
                `L ${pFarRightKinkX},${pFarRightKinkY} ` +
                `L ${stageW},${rightY}`;

      ropePath.setAttribute('d', d);
      ropeShadow.setAttribute('d', d);

      // Render Figma vector anchor nodes (blue circles with white fill)
      const nodes = [
        { x: 0, y: leftY },
        { x: pLeftKinkX, y: pLeftKinkY },
        { x: lowestX, y: lowestY },
        { x: pRightKinkX, y: pRightKinkY },
        { x: pFarRightKinkX, y: pFarRightKinkY },
        { x: stageW, y: rightY }
      ];

      let nodesHTML = '';
      nodes.forEach(n => {
        nodesHTML += `<circle cx="${n.x}" cy="${n.y}" r="4.2" fill="#FFFFFF" stroke="#0D99FF" stroke-width="1.8"/>`;
      });
      nodesGroup.innerHTML = nodesHTML;

      // Position the Figma vector move cursor at the lowest vertex
      if (cursorGroup) {
        cursorGroup.style.display = 'block';
        cursorGroup.setAttribute('transform', `translate(${lowestX}, ${lowestY})`);
      }
    }

    // Attach Pointer Events to each draggable pill
    pills.forEach(p => {
      let startX = 0, startY = 0;
      let origX = 0, origY = 0;
      let hasMoved = false;

      p.el.addEventListener('pointerdown', (e) => {
        p.isDragging = true;
        hasMoved = false;
        startX = e.clientX;
        startY = e.clientY;
        origX = p.x;
        origY = p.y;

        p.el.setPointerCapture(e.pointerId);
        p.el.classList.add('is-dragging');
      });

      p.el.addEventListener('pointermove', (e) => {
        if (!p.isDragging) return;
        const dx = e.clientX - startX;
        const dy = e.clientY - startY;

        if (Math.hypot(dx, dy) > 5) {
          hasMoved = true;
        }

        p.x = Math.max(10, Math.min(stageW - p.width - 10, origX + dx));
        p.y = Math.max(10, Math.min(stageH - p.height - 20, origY + dy));
        p.rot = p.baseRot + (dx * 0.04);

        p.el.style.transform = `translate3d(${p.x}px, ${p.y}px, 0) rotate(${p.rot}deg)`;
        updateRope();
      });

      const handlePointerUp = (e) => {
        if (!p.isDragging) return;
        p.isDragging = false;
        p.el.classList.remove('is-dragging');
        try { p.el.releasePointerCapture(e.pointerId); } catch(err) {}

        if (!hasMoved) {
          // Click action: open artifact preview modal
          const pillName = p.el.innerText.trim();
          if (pillName === 'Modul Ajar') {
            openDocumentModal('MODUL%20AJAR%20P1%20PPLM%20FADILATUL%20FAJRI.pdf', 'Modul Ajar Kurikulum Merdeka', 'Perencanaan Pembelajaran Norma Hukum');
          } else if (pillName === 'Bahan Ajar') {
            openDocumentModal('BAHAN%20AJAR%20P1%20PPLM%20FADILATUL%20FAJRI.pdf', 'Bahan Ajar Siswa', 'Bahan Bacaan Norma & Aturan');
          } else if (pillName === 'LKM') {
            openDocumentModal('LKM%20P1%20PPLM%20FADILATUL%20FAJRI.pdf', 'Lembar Kerja Murid (LKM)', 'Instrumen LKPD Terbimbing');
          } else {
            openDocumentModal('#', pillName, 'Artefak Pembelajaran PPL Mandiri');
          }
        } else {
          // Settled on rope
          updateRope();
        }
      };

      p.el.addEventListener('pointerup', handlePointerUp);
      p.el.addEventListener('pointercancel', handlePointerUp);
    });

    window.addEventListener('resize', () => {
      layoutPills();
    }, { passive: true });

    // Initial run
    requestAnimationFrame(() => {
      layoutPills();
    });
  }

  // Open Floor Artifact modal preview
  window.openFloorArtifact = function(type, title) {
    if (window.openDocumentModal) {
      window.openDocumentModal(type, type, title);
    }
  };

  // -------------------------------------------------------------
  // Interaktivitas Section 5: Expanding Accordion Gallery
  // - Posisi awal: Foto ke-2 paling lebar (index 1)
  // - Hover ke foto 1, 3, 4, 5: kartu tersebut membuka lebar
  // - Kursor keluar area galeri: posisi awal kembali aktif (foto 2 melebar)
  // - Mendukung click/touch untuk interaksi mobile
  // -------------------------------------------------------------
  function initAccordionGallery() {
    const galleryContainer = document.getElementById('ppl-gallery-accordion');
    if (!galleryContainer) return;

    const cards = Array.from(galleryContainer.querySelectorAll('.gallery-card'));
    const defaultIndex = 1; // Foto ke-2 (Observasi Mengajar dari DPL dan GP)

    function setActiveCard(index) {
      cards.forEach((card, i) => {
        if (i === index) {
          card.classList.add('is-active');
          card.setAttribute('aria-expanded', 'true');
        } else {
          card.classList.remove('is-active');
          card.setAttribute('aria-expanded', 'false');
        }
      });
    }

    // Set posisi awal foto ke-2 paling lebar
    setActiveCard(defaultIndex);

    cards.forEach((card, index) => {
      // Hover: saat kursor pindah ke foto 1, 2, 3, 4, atau 5, kartu tersebut membuka lebar
      card.addEventListener('mouseenter', () => {
        setActiveCard(index);
      });

      // Click / Touch untuk responsif di desktop & mobile
      card.addEventListener('click', (e) => {
        // Jangan trigger jika klik tombol zoom
        if (e.target.closest('.gallery-zoom-btn')) return;
        setActiveCard(index);
        if (window.innerWidth < 768) {
          card.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
        }
      });
    });

    // Saat kursor meninggalkan kontainer galeri, kembali ke posisi awal (foto ke-2 paling lebar)
    galleryContainer.addEventListener('mouseleave', () => {
      setActiveCard(defaultIndex);
    });
  }

  // Modal Lightbox Foto Ukuran Penuh untuk Galeri
  window.openGalleryImageModal = function(src, title, desc) {
    if (!artifactModal || !artifactModalBody) return;

    artifactModalBody.innerHTML = `
      <div class="p-5 sm:p-7 space-y-4 bg-[#F4F0EA]">
        <div class="flex items-center justify-between border-b border-[#D8D1C5] pb-3">
          <div class="inline-flex items-center gap-2 px-3.5 py-1 bg-[#FAECE5] text-[#E65F2B] border border-[#F5D8CA] text-xs font-mono font-bold rounded-full">
            <span>✦</span>
            <span>DOKUMENTASI PPL MANDIRI</span>
          </div>
          <button 
            onclick="document.getElementById('artifact-modal').classList.add('hidden')"
            class="text-[#262626] hover:text-[#E65F2B] p-1.5 border border-[#D8D1C5] hover:border-[#E65F2B] bg-white transition-colors"
            title="Tutup"
            aria-label="Tutup Pratinjau"
          >
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M6 18L18 6M6 6l12 12"/>
            </svg>
          </button>
        </div>

        <div class="overflow-hidden rounded-xl border border-[#D8D1C5] bg-black/10 flex items-center justify-center max-h-[68vh] shadow-inner">
          <img src="${src}" alt="${title}" class="max-h-[68vh] w-auto max-w-full object-contain" />
        </div>

        <div class="pt-2">
          <h3 class="font-serif font-black text-xl sm:text-2xl text-[#1E1E1E] mb-1.5 leading-snug">${title}</h3>
          <p class="font-sans text-xs sm:text-sm text-[#5A554E] leading-relaxed max-w-2xl">${desc}</p>
        </div>

        <div class="pt-3 border-t border-[#D8D1C5] flex items-center justify-between font-mono text-[11px] text-[#8E887F]">
          <span>SMP Negeri 5 Purwokerto</span>
          <button 
            onclick="document.getElementById('artifact-modal').classList.add('hidden')" 
            class="px-4 py-1.5 bg-[#262626] hover:bg-[#E65F2B] text-xs font-bold text-white transition-colors"
          >
            Tutup
          </button>
        </div>
      </div>
    `;

    artifactModal.classList.remove('hidden');
  };

  // Expose function for inline onclick if needed
  window.openDocumentModal = openDocumentModal;
}
