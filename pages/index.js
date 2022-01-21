import React from 'react';

export default function Index() {
  return(
    <>
        <div class="dropdown open mx-auto">
          <button class="btn btn-secondary mx-auto dropdown-toggle" type="button" id="triggerId" data-bs-toggle="dropdown" aria-haspopup="true"
              aria-expanded="false">
                Dropdown
              </button>
          <div class="dropdown-menu" aria-labelledby="triggerId">
            <a class="dropdown-item" href="#">Action</a>
            <a class="dropdown-item disabled" href="#">Disabled action</a>
            <h6 class="dropdown-header">Section header</h6>
            <a class="dropdown-item" href="#">Action</a>
            <div class="dropdown-divider"></div>
            <a class="dropdown-item" href="#">Ater divider action</a>
          </div>
        </div>
    </>

  )
}
