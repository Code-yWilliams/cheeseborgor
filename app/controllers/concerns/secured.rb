module Secured
  extend ActiveSupport::Concern

    included do
    before_action :require_auth
    before_action :require_profile_setup, unless: :profile_setup_complete_or_on_setup_page

    def require_auth
      redirect_to :root unless current_user.present?
    end

    def require_profile_setup
      redirect_to "/profile-setup"
    end

    def profile_setup_complete_or_on_setup_page
      current_user.username.present? || request.path == "/profile-setup"
    end
  end
end
