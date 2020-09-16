<script>
  import MainPage from './layouts/IVCurve';
  import UpdateModal from './organisms/UpdateModal';
  import { ipcRenderer } from 'electron';
  let updateAvailable = ipcRenderer.sendSync('checkUpdate');

  ipcRenderer.on('updateAvailable', () => (updateAvailable = true));
</script>

<MainPage />
{#if updateAvailable}
  <UpdateModal />
{/if}
