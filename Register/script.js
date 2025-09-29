    $(function () {
    $('.button-checkbox').each(function () {
        var $widget = $(this),
            $button = $widget.find('button'),
            $checkbox = $widget.find('input:checkbox'),
            color = $button.data('color'),
            settings = {
                on: {
                    icon: 'glyphicon glyphicon-check'
                },
                off: {
                    icon: 'glyphicon glyphicon-unchecked'
                }
            };

        // Event Button
        $button.on('click', function () {
            $checkbox.prop('checked', !$checkbox.is(':checked'));
            $checkbox.triggerHandler('change');
            updateDisplay();
        });

        // Event Checkbox
        $checkbox.on('change', function () {
            updateDisplay();
        });

        function updateDisplay() {
            var isChecked = $checkbox.is(':checked');

            // Set state button
            $button.data('state', (isChecked) ? "on" : "off");

            // Set icon
            $button.find('.state-icon')
                .removeClass()
                .addClass('state-icon ' + settings[$button.data('state')].icon);

            // Update warna button
            if (isChecked) {
                $button
                    .removeClass('btn-default')
                    .addClass('btn-' + color + ' active');
            } else {
                $button
                    .removeClass('btn-' + color + ' active')
                    .addClass('btn-default');
            }
        }

        // Init
        function init() {
            updateDisplay();

            // Insert icon jika belum ada
            if ($button.find('.state-icon').length == 0) {
                $button.prepend('<i class="state-icon ' +
                    settings[$button.data('state']].icon + '"></i> ');
            }
        }
        init();
    });
});
