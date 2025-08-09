class ProfileSetupController < SecuredApplicationController
  def index
    return redirect_to :home if current_user.setup_complete?

    render inertia: "ProfileSetup"
  end

  def create
    username = params["username"]
    current_user.update(username:)
    redirect_to :home
  end
end
