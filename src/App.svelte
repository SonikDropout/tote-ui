<script>
  import MainPage from './layouts/IVCurve';
  import UpdateModal from './organisms/UpdateModal';
  let updateAvailable = ipcRenderer.sendSync('checkUpdate');

  ipcRenderer.on('updateAvailable', () => (updateAvailable = true));

  document.getElementById('version').innerText = version;
</script>

<MainPage />
{#if updateAvailable}
  <UpdateModal />
{/if}
