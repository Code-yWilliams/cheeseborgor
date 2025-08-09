class ApplicationController < ActionController::Base
  # Only allow modern browsers supporting webp images, web push, badges, import maps, CSS nesting, and CSS :has.
  allow_browser versions: :modern

  helper_method :current_user
  def current_user
    @current_user ||= User.find_by(email: session[:userinfo]["email"]) if session[:userinfo].present?
  end

  inertia_share do
    {
      csrfToken: form_authenticity_token,
      currentUser: current_user
    }
  end
end
