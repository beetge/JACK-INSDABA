// JavaScript extracted from inline <script> block 002 in the 'home' template/context. Related area: programme_v3_tabs.

                                    function showCsiProgrammeV3(button, panelName) {
                                        const section = button.closest('.csi-programme-v3');
                                        section.querySelectorAll('.csi-programme-v3-tab').forEach(tab => tab.classList.remove('active'));
                                        section.querySelectorAll('.csi-programme-v3-panel').forEach(panel => panel.classList.remove('active'));
                                        button.classList.add('active');
                                        const panel = section.querySelector('[data-programme-v3-panel="' + panelName + '"]');
                                        if (panel) panel.classList.add('active');
                                    }
                                