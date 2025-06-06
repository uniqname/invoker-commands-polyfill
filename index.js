(() => {
  if ('CommandEvent' in globalThis) return;
  if (!'document' in globalThis) {
    console.warn('Invoker Commands API polyfill requires a DOM environment');
  }
  class CommandEvent extends Event {
    command;
    source;
    constructor(type = 'command', options) {
      super(type, options);
      this.command = options.command;
      this.source = options.source;
    }
  }
  document.documentElement.addEventListener('click', (event) => {
    const composedPath = event.composedPath();
    const commander = composedPath.find(el => el.matches?.('button[command]'));
    const context = composedPath.find(el => !!el.host) || document.documentElement;

    if (!commander) return;

    const commandFor = commander.getAttribute('commandfor');
    const commandTarget = context.querySelector(`#${commandFor}`);

    if (!commandTarget) return

    const command = commander.getAttribute('command');

    if (command.startsWith('--')) return commandTarget.dispatchEvent(new CommandEvent('command', { command, target: commandTarget, source: commander }));
    switch (command) {
      case 'close': return commandTarget.close?.();
      case 'hide-popover': return commandTarget.hidePopover?.();
      case 'request-close': return commandTarget.requestClose?.();
      case 'show-modal': return commandTarget.showModal?.();
      case 'show-popover': return commandTarget.showPopover?.();
      case 'toggle-popover': return commandTarget.togglePopover?.();
      default: console.warn(`Unknown command: ${command}. Custom commands must start with '--'.`);
    }
  })
  console.log('Invoker Commands API polyfilled')
})();