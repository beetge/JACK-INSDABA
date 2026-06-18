// JavaScript extracted from inline <script> block 006 in the 'speakers' template/context. Related area: programme_panel_tabs.

function showCsiProProgrammePanel(button, panelName) {
  const section = button.closest('.csi-pro-programme');
  if (!section) return;
  section.querySelectorAll('.csi-pro-tab').forEach(tab => tab.classList.remove('active'));
  button.classList.add('active');
  section.querySelectorAll('.csi-pro-panel').forEach(panel => panel.style.display = panel.dataset.panel === panelName ? 'block' : 'none');
}
function filterCsiProRoom(button, room) {
  const panel = button.closest('.csi-pro-panel');
  if (!panel) return;
  panel.querySelectorAll('.csi-room-filter').forEach(filter => filter.classList.remove('active'));
  button.classList.add('active');
  panel.querySelectorAll('.csi-pro-row[data-room]').forEach(row => row.style.display = room === 'all' || row.dataset.room === room ? 'grid' : 'none');
}
function showCsiProgrammePanel(button, panelName) {
  const section = button.closest('.csi-programme-shell');
  if (!section) return;
  section.querySelectorAll('.csi-programme-tab').forEach(tab => tab.classList.remove('active'));
  button.classList.add('active');
  section.querySelectorAll('.csi-programme-panel').forEach(panel => panel.style.display = panel.dataset.panel === panelName ? 'block' : 'none');
}
function showCsiSpeakerAgenda(button, panelName) {
  const section = button.closest('.csi-speaker-agenda');
  if (!section) return;
  section.querySelectorAll('.csi-speaker-day-tab').forEach(tab => tab.classList.remove('active'));
  button.classList.add('active');
  section.querySelectorAll('.csi-speaker-day-panel').forEach(panel => panel.style.display = panel.dataset.panel === panelName ? 'grid' : 'none');
}
